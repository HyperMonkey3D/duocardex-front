import { menu, profileMenu } from "@/app/utils/dataLists";
import Link from "next/link";

const ExpandedMenu = () => {
  return (
    <>
      <div>
        <ul>
          {menu.map((item) => {
            const { id, name, route } = item;
            return (
              <li key={id}>
                <Link href={`${route}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {profileMenu.map((item) => {
            const { id, name, route } = item;
            return (
              <li key={id}>
                <Link href={`${route}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ExpandedMenu;
