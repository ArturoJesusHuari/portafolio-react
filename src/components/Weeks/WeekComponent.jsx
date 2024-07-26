import { Link } from "react-router-dom"
function WeekComponents({ title, description, stack, to, children }) {
  return (
    <li className="mb-12">
      <div
        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
        </div>
        <Link className="z-10 sm:order-2 sm:col-span-6" to={to}>
          <h3><div
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
            href="LabWeb.html" target="_blank" rel="noreferrer noopener">
            <span
              className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
            </span>
            <span>{title}
              <span className="inline-block">
              </span>
            </span>
          </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul class="mt-2 flex " aria-label="Technologies used:">
          {stack.map((st) =>
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {st}
                </div>
              </li>
          )}
          </ul>
        </Link>
        {children}
      </div>
    </li>
  )
}
export default WeekComponents