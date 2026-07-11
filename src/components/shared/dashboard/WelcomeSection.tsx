import DashboardHeading from "@/components/shared/DashboardHeading"

const today = new Date()
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
})

export default function WelcomeSection() {
  return (
    <DashboardHeading
      title={`Welcome back, Sara 👋`}
      description={formattedDate}
    />
  )
}
