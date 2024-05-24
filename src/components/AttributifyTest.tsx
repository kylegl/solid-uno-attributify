import { ComponentProps } from "solid-js";

export default function AttributifyTest(props: ComponentProps<"div">) {
  return (
    <div {...props} p-2 b-1 b-zinc-500 rounded-sm>
      <h3 font-bold>Attributify Test Component</h3>

    </div>
  );
}
