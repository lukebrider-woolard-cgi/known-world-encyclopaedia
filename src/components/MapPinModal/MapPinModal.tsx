type MapPinModalProps = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export function MapPinModal({ children, open, onClose }: MapPinModalProps) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-colors ${
        open ? "visible bg-black/40" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-80 h-auto p-4 bg-yellow-50 rounded-xl shadow transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
