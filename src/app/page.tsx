import {Lego} from "@phosphor-icons/react/dist/ssr";


export default function HomePage() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-moonstone text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <div className="flex flex-col gap-10 items-center text-center sm:flex-row">
                    <Lego className="text-orange" size={84} />
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        <span className="text-yellow">Foundation</span> Labs
                    </h1>
                </div>

                <div
                    className="flex flex-col gap-4 rounded-xl bg-white/10 p-6 text-white sm:p-12 md:px-24"
                >
                    <h3 className="text-3xl font-bold">Coming soon!</h3>
                    <div className="text-lg">
                        Laying the groundwork for exceptional software.{" "}
                        One business at a time.
                    </div>
                </div>
            </div>
        </main>
    );
}
