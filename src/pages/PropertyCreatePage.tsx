import Header from "@/components/Header";
import PropertyCreationFrom from "@/components/PropertyCreationForm/PropertyFrom";

export default function PropertyCreatePage() {
  return (
    <div className="flex flex-col w-full h-dvh p-6 gap-4">
      <Header />
      <PropertyCreationFrom mode="create" />
    </div>
  );
}
