import { useProperty } from "@/hooks/useProperty";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PropertyDeatils() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  if (!params.id) return navigate("/");

  const { data, isLoading, error } = useProperty(params.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>Error: {error instanceof Error ? error.message : "Unknown"}</div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm h-full flex-1 p-6 rounded-xl shadow-md gap-6 max-w-[768px] overflow-y-auto flex flex-col">
      {JSON.stringify(data)}
    </div>
  );
}
