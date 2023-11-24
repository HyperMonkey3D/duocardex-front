import {
  iconsCollapsedSideBar,
  iconsCollapsedProfile,
} from "../utils/dataLists";
import Link from "next/link";
import Image from "next/image";

const CollapsedMenu = () => {
  return (
    <>
      <div>
        <ul>
          {iconsCollapsedSideBar.map((item) => {
            const { id, icon, route } = item;
            return (
              <li key={id}>
                <Link href={`${route}`}>
                  <Image src={icon} alt="icon" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {iconsCollapsedProfile.map((item) => {
            const { id, icon, route } = item;
            return (
              <li key={id}>
                <Link href={`${route}`}>
                  <Image src={icon} alt="icon" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CollapsedMenu;
