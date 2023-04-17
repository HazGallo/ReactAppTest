import CustomDrawer from "../CustomDrawer";
import BodyExample from "./components/BodyExample";

export function DrawerParent() {
    return (
        <CustomDrawer>
            <BodyExample />
        </CustomDrawer>
    );
}