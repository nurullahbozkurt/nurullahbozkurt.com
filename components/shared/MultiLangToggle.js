import { Switch } from "@headlessui/react";

const MultiLangToggle = ({ onChange, enabled }) => {
  return (
    <>
      <div className="flex items-center justify-center border p-1 rounded-full shadow-specialB">
        <p className="py-1 px-2 text-base ">{!enabled ? "TR" : "EN"}</p>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-gray-800" : "bg-gray-800"
          } relative inline-flex items-center h-8 rounded-full w-14`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? "translate-x-7" : "translate-x-3"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
    </>
  );
};
export default MultiLangToggle;
