"use client";

import { useState, ChangeEvent } from "react";
import { Heading, InputField, Select, Table } from "@/components/widgets";
import Input from "@/components/widgets/Input/index";

export default function Page() {
  const options = [
    { value: "abc", label: "ABC" },
    { value: "def", label: "DEF" },
    { value: "ghi", label: "GHI" },
    { value: "jkl", label: "JKL" },
    { value: "mno", label: "MNO" },
  ]
  const [values, setValues] = useState({
    input: "",
    select: [],
    selectMulti: [],
  });
  return (
    <>
      <header className="mx-auto max-w-7xl bg-white">
        <div className="px-4 py-6 sm:px-6 lg:px-8 border-b">
          <Heading level="h1">Components</Heading>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="form-control">
          <Heading level="h2">Input</Heading>
          <Input id="id" label="Label" type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({...values, input: e.target.value})} />
        </div>
        <div className="form-control">
          <Heading level="h2">Select</Heading>
          <Select id="select" type="text" options={options} onChange={(item) => console.log(item)} />
        </div>
        <div className="form-control">
          <Heading level="h2">Table</Heading>
          <Table
            id="myTable"
            data={[]}
            columns={[]}
            onChange={(index, id, value) => console.log(index, id, value)}
          />
        </div>
      </main>
    </>
  );
}
