import { toast } from "sonner";

export default function useToast() {
  return (
    title: string,
    variant?: "success" | "error" | "info" | "warning"
  ) => {
    const t = <h2 className="text-dark-gray">{title}</h2>;
    const options = {
      style: {
        backgroundColor: "var(--light-gray)",
        borderTop: "0.2rem solid ",
        borderRadius: "0",
        color: "var(--accent)",
        width: "100%",
      },
    };

    switch (variant) {
      case "error":
        return toast.error(t, options);
      case "info":
        return toast.info(t, options);
      case "success":
        return toast.success(t, options);
      case "warning":
        return toast.warning(t, options);
      default:
        return toast(t, options);
    }
  };
}
