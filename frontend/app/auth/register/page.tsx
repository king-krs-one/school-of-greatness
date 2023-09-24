import { Link, Heading, Image } from "@/components/widgets";
import { RegisterForm } from "@/components/forms";

export default function Page() {
  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="School of Greatness"
          />
          <Heading level="h2" className="text-center">
            Sign up for your account
          </Heading>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm />
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account? <Link href="/auth/login">Login here</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
