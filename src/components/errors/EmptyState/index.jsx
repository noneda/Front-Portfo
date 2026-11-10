import RenderIcon from "@/components/ui/RenderIcon";

const EmptyState = ({
  icon = "Inbox",
  title = "Nada por aquí todavía",
  message,
}) => (
  <div className="flex flex-col items-center gap-2 py-10 text-center text-gray-500">
    <RenderIcon component={icon} name={title} />
    <p className="font-bold">{title}</p>
    {message && <p className="text-sm">{message}</p>}
  </div>
);

export default EmptyState;
