interface PageProps {
  children?: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {children}
      </div>
    </div>
  );
}
