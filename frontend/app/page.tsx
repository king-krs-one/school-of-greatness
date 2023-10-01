import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School of Greatness | Home",
  description: "School of Greatness home page",
};

export default function Page() {
  return (
    <main className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              School of Greatness App
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This is an online school, providing the tools, to become the
              greatest version of yourself. The aim is to teach moral values,
              encourage sports every day and lead to success, in business,
              family or anything you put in practice.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log into your account 
              </Link>
              <Link
                href="/auth/login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Or create an account <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
