import { InputField, Button, Label } from "@/components/widgets";

// import InputField from "@/components/widgets/Input";
// import Label from "@/components/widgets/Label";
// import Button from "@/components/widgets/Button";

export default function Page() {
  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="School of Greatness"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <div className="mt-2">
                <InputField
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <div className="mt-2">
                <InputField
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2">
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="mt-2">
                <InputField
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="mt-2">
                <InputField
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>
            </div>

            <div>
              <Button type="submit">Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
