"use client";

import {  useState, FormEvent } from "react";

import Container from "@/components/Container";
// import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


import { createAction } from "@/app/actions";

export default function Home() {
  const [state, setState] = useState("ready");
  const [error, setError] = useState<string>();

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    if (state === "pending") {
      return;
    }
   

    const formData = new FormData(event.currentTarget);
    console.log("Form Data:", Object.fromEntries(formData.entries()));
    try {
      await createAction(formData);
    }
    catch (error) {
      console.log(error);
      setError(String(error));     
      return;
    }
  
    setState("pending");
  }

  return (
    <main className="h-full">
      <Container>
        {error && (
          <p className="bg-red-100 text-sm text-red-800 text-center px-3 py-2 rounded-lg mb-6">
            {error}
          </p>
        )}
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-semibold">Create Invoice</h1>
        </div>

        {/* ✅ Use the native <form> tag instead of `Form` */}
        <form  onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
          <div>
            <Label htmlFor="name" className="block font-semibold text-sm mb-2">
              Billing Name
            </Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="email" className="block font-semibold text-sm mb-2">
              Billing Email
            </Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div>
            <Label htmlFor="value" className="block font-semibold text-sm mb-2">
              Value
            </Label>
            <Input id="value" name="value" type="text" />
          </div>
          <div>
            <Label htmlFor="description" className="block font-semibold text-sm mb-2">
              Description
            </Label>
            <Input id="description" name="description" type="text" />
          </div>
          <div>
            <button type="submit" className="bg-slate-500 border">Submit</button>
            {/* <SubmitButton /> */}
          </div>
        </form>
      </Container>
    </main>
  );
}
