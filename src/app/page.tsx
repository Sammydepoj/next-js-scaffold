import SampleForm from "@/components/sample-form";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-20 px-4 bg-white dark:bg-black sm:items-start text-center sm:text-left">
        <div className="w-full space-y-8">
          <div className="flex flex-col items-center gap-6 sm:items-start">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
              Campus Test Project
            </h1>
          </div>

          <div className="mt-10">
            <SampleForm />
          </div>
        </div>
      </main>
    </div>
  );
}
