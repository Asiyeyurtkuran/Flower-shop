import { useRef } from "react"
import useOnOutsideClick from "../../hooks/useOnOutsideClick"
import MenuItem from "../menu/menuItem"
import Menu from "../menu"

const CascadingMenu = ({ name, setIsMenuVisible }) => {
    const menuRef = useRef(null)

    useOnOutsideClick(menuRef, () => setIsMenuVisible(false))

    return (
        <div ref={menuRef}>
            <Menu className={name} >
                <MenuItem icon={<ProfileIcon />} text='Profile' />
                <MenuItem icon={<AddIcon />} text='Add note' />

                <MenuItem icon={<CohortIcon />} text='Move to cohort'>
                    <MenuItem icon={<SquareBracketsIcon />} text='Software Development'>
                        <MenuItem icon={<CohortIconFill />} text='Cohort 1' />
                        <MenuItem icon={<CohortIconFill />} text='Cohort 2' />
                        <MenuItem icon={<CohortIconFill />} text='Cohort 3' />
                    </MenuItem>

                    <MenuItem icon={<MonitorIcon />} text='Frontend Development'>
                        <MenuItem icon={<CohortIconFill />} text='Cohort 1' />
                        <MenuItem icon={<CohortIconFill />} text='Cohort 2' />
                        <MenuItem icon={<CohortIconFill />} text='Cohort 3' />
                    </MenuItem>

                </MenuItem>

                <MenuItem icon={<DeleteIcon />} text='Delete student' />
            </Menu>
        </div>
    )
}

export default CascadingMenu