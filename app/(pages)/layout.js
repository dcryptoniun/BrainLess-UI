import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex w-full">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}
