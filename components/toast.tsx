"use client"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { type Toast as ToastType, useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const toastVariants = {
  default: "bg-white border-gray-200 text-gray-900",
  success: "bg-green-50 border-green-200 text-green-900",
  error: "bg-red-50 border-red-200 text-red-900",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
  info: "bg-blue-50 border-blue-200 text-blue-900",
}

const toastIcons = {
  default: null,
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

function ToastItem({ toast }: { toast: ToastType }) {
  const { dismiss } = useToast()
  const Icon = toastIcons[toast.type || "default"]

  return (
    <div
      className={cn(
        "pointer-events-auto flex w-full max-w-md rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out",
        toastVariants[toast.type || "default"],
      )}
    >
      <div className="flex w-full items-start gap-3">
        {Icon && <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />}
        <div className="flex-1">
          {toast.title && <div className="text-sm font-semibold">{toast.title}</div>}
          {toast.description && <div className="mt-1 text-sm opacity-90">{toast.description}</div>}
        </div>
        <button
          onClick={() => dismiss(toast.id)}
          className="flex-shrink-0 rounded-md p-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  )
}
