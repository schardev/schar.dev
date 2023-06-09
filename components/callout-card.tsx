import { ErrorCross } from "@/lib/icons";
import clsx from "clsx";
import { InfoEmpty, WarningTriangle } from "iconoir-react";

type CalloutCardProps = {
  children: React.ReactNode;
  severity?: "note" | "warning" | "danger";
  className?: string;
};

const calloutCards = {
  note: {
    icon: <InfoEmpty />,
    text: "Note",
    className: "bg-teal-100 text-teal-950",
  },
  danger: {
    icon: <ErrorCross />,
    text: "Danger",
    className: "bg-red-100 text-red-950",
  },
  warning: {
    icon: <WarningTriangle />,
    text: "Warning",
    className: "bg-yellow-100 text-yellow-950",
  },
};

const CalloutCard = ({
  children,
  severity = "note",
  className,
}: CalloutCardProps) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-md not-prose",
        calloutCards[severity].className,
        className
      )}>
      <div className="flex gap-2 items-center pb-4">
        {calloutCards[severity].icon}
        <p className="font-medium">{calloutCards[severity].text}</p>
      </div>
      <div className="text-current">{children}</div>
    </div>
  );
};

export default CalloutCard;
