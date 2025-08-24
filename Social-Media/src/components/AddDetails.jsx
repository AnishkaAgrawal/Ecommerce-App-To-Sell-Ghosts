import { Button } from "@/components/ui/button";
import Comments from "./Comments";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function AddDetails(props) {
  return (
    <Dialog>
      <DialogTrigger>👻 View Ghost Details</DialogTrigger>

      {/* <DialogContent className="bg-gradient-to-b from-gray-900 to-black text-white w-[90vw] h-[90vh] max-w-none max-h-none rounded-xl shadow-2xl p-6 relative overflow-y-auto"> */}
      {/* <DialogContent className="fixed inset-0 m-auto bg-gradient-to-b from-gray-900 to-black text-white w-[90vw] h-[90vh] rounded-xl shadow-2xl p-6 overflow-y-auto flex flex-col"> */}
      {/* <div className="fixed inset-0 bg-black/50 z-40"></div>

<DialogContent className="
  fixed top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  w-[90vw] h-[90vh]
  bg-gradient-to-b from-gray-900 to-black
  text-white rounded-xl shadow-2xl
  p-6 overflow-y-auto z-50
  flex flex-col
"> */}
<DialogContent className="
  fixed top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  max-h-[90vh] w-[90vw]
  bg-gradient-to-b from-gray-900 to-black
  text-white rounded-xl shadow-2xl
  p-6 overflow-y-auto
  flex flex-col
  z-50
">
        {/* <DialogClose asChild>
          <button className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-2xl">
            ✖
          </button>
        </DialogClose> */}
        <DialogHeader>
          <DialogTitle className="text-2xl   !text-white font-bold">
            Ghostly Details
          </DialogTitle>
          <DialogDescription>
            <Comments Pass={props.Pass} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
