import { useToast } from "@/components/ui/use-toast"

export const ToastDemo = () => {
    const { toast } = useToast()
  
    return (
      <Button
        onClick={() => {
          toast({
            title: "Sign In To Continue",
            description: "Friday, April 5, 2024 at 9:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
    )
  }
  