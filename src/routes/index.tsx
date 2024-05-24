import { A } from "@solidjs/router";
import AttributifyTest from "~/components/AttributifyTest";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4 flex flex-col gap-6">
      <div flex flex-col gap-4 p-2 b-1 b-zinc-400 rounded-sm>
        <p>The component below has bg-red passed as a prop. The attribute is transformed to bg-red=true and not applied</p>
        <AttributifyTest bg-red />
      </div>

      <div flex flex-col gap-4 p-2 b-1 b-zinc-400 rounded-sm>
        <p mb-2>The div below is not a component and has the bg-red attribute. Works as intended</p>
        <div bg-red p-2 b-1 b-zinc-500 rounded-sm font-bold>div element</div>
      </div>
    </main>
  );
}
