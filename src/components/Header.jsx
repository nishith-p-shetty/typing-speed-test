import { ThemeToggler } from "@/components/ThemeToggler";
import { GitHubLogoIcon, LapTimerIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";


export const Header = () => {
    return (
        <header className="bg-inherit py-4 shadow-lg dark:bg-accent sticky top-0 z-30 transition-all">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl flex items-center justify-between">
                        <LapTimerIcon className="text-xl flex items-center justify-between mx-1" />
                        Typing Speed Test
                    </h1>
                    <div className="flex items-center gap-x-6">
                        <Link href="https://github.com/nishith-p-shetty/typing-speed-test" target="_blank">
                            <Button variant="outline" size="icon">
                                <GitHubLogoIcon />
                            </Button>
                        </Link>
                        <ThemeToggler />
                    </div>
                </div>
            </div>
        </header>
    )
}
