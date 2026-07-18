import type {Project} from "@/data/projects.ts";
import {Card} from "@/components/ui/card.tsx";
import {cn} from "@/lib/utils.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRight} from "lucide-react";


export function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
    return (
        <Card className="p-0 transition-transform transition-shadow duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
            <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 md:grid-cols-3">
                <div
                    className={cn(
                        "flex flex-col gap-3 md:col-span-2",
                        reverse ? "md:order-2" : "md:order-1"
                    )}
                >
                    <Badge variant="secondary" className="w-fit">
                        {project.status}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {project.description}
                    </p>
                </div>

                <div
                    className={cn(
                        "flex flex-col gap-4 border-indigo-500/70 p-4 md:col-span-1 dark:border-indigo-400/60",
                        reverse
                            ? "md:order-1 rounded-tr-lg border-t-2 border-r-2"
                            : "md:order-2 rounded-tl-lg border-t-2 border-l-2"
                    )}
                >
                    <span className="text-sm font-medium text-foreground">Tech Stack</span>
                    {project.stacks.map((stack) => (
                        <div key={stack.label} className="flex flex-col gap-1.5">
                            <span className="text-xs text-muted-foreground">{stack.label}</span>
                            <div className="flex flex-wrap gap-1.5">
                                {stack.items.map((item) => (
                                    <Badge key={item} variant="outline">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end border-t border-border px-6 py-3 sm:px-8">
                <Button asChild variant="ghost" size="sm">
                    <a href="#">
                        More
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                </Button>
            </div>
        </Card>
    )
}