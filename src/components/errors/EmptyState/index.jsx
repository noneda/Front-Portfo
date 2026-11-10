import Icon from "@/components/ui/Icon";

const EmptyState = ({ icon = "Inbox", title, message }) => (
  <div className="flex flex-col items-center gap-2 py-10 text-center opacity-70">
    <Icon name={icon} size={32} />
    {title && <p className="font-display uppercase">{title}</p>}
    {message && <p className="text-sm">{message}</p>}
  </div>
);

export default EmptyState;
