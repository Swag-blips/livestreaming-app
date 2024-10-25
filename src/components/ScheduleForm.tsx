import { useUser } from "@clerk/clerk-react";
import generateUniqueId from "generate-unique-id";
import { X } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import "react-datepicker/dist/react-datepicker.css";

interface ScheduleForm {
  mode: "create" | "update";
  onClose: () => void;
  preloadedData?: any;
  onComplete: () => void;
}

interface Data {
  title: string;
  scheduleId: string | undefined;
  date: Date | null;
  time: Date | null;
  description: string;
}
const ScheduleForm = ({
  mode,
  onClose,
  onComplete,
  preloadedData,
}: ScheduleForm) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any>({
    title: "",
    date: new Date(),
    time: new Date(),
    description: "",
  });

  useEffect(() => {
    if (preloadedData)
      setData({
        ...preloadedData,
        date: timeStringToDate(
          preloadedData.time,
          new Date(preloadedData.date)
        ),
        time: timeStringToDate(preloadedData.time),
      });
  }, [preloadedData]);
  const { user } = useUser();

  const timeStringToDate = (timeString: any, date = new Date()) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours < 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return new Date(date.setHours(hours, minutes, 0, 0));
  };

  const createSchedule = async () => {
    setError("");

    if (!data.date) return setError("Date is required");
    if (!data.time) return setError("Time is required");

    let upload = {
      ...data,
      date: moment(data.date).format("MM-DD-YYYY"),
      time: moment(data.time).format("hh:mm a"),
      email: user?.primaryEmailAddress?.emailAddress,
      scheduleId: generateUniqueId({ length: 6 }),
    };

    try {
      setLoading(true);
      if (mode === "create") {
        await addDoc(collection(db, "schedules"), upload);
        onComplete();
        return onClose();
      }
      if (mode === "update") {
        delete upload.scheduleId;
        await updateDoc(doc(db, "schedules", preloadedData.id), upload);
        onComplete();
        return onClose();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

    console.log("Upload", upload);
  };

  return (
    <div className="fixed top-0 left-0 z-[300] w-full h-full p-4 bg-dark-overlay flex justify-center overflow-y-auto">
      <div className="bg-bgSecondary py-8 px-4 rounded-2xl h-fit w-full max-w-[400px]">
        <div className="flex justify-between items-center">
          <h1>Schedule live Streams</h1>
          <div
            onClick={onClose}
            className="bg-bgprimary size-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-primary cursor-pointer"
          >
            <X />
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div>
          <input
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, title: e.target.value })
            }
            className="block my-5 w-full h-[50px] text-sm bg-bgprimary px-2 rounded-md outline-none border border-gray-700 focus:border-primary"
          />
          <div className="flex justify-center">
            <DatePicker
              inline
              selected={data.date}
              minDate={new Date()}
              onChange={(value) => {
                setData({
                  ...data,
                  date: value,
                  time: value,
                });
              }}
              showTimeSelect
              timeIntervals={30}
              dateFormat={"h:mm a"}
            />
          </div>
          <textarea
            placeholder="live stream description"
            value={data.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setData({ ...data, description: e.target.value })
            }
            className="block my-5 w-full h-[100px] py-2 text-sm bg-bgprimary px-2 rounded-md outline-none border border-gray-700 focus:border-primary"
          ></textarea>
          <button
            onClick={createSchedule}
            className="block w-full bg-gradient-to-r from-primary to-blue-600 py-2 px-4 rounded-lg"
          >
            {loading
              ? "Please wait..."
              : mode === "create"
              ? "Create Now"
              : "Edit Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;
