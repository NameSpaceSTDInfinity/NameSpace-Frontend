import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar maxWidth="full" className="bg-gray-900 text-white">
      <NavbarBrand>
        <Link to="/" className="flex items-center">
          <svg
            className="w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-bold text-xl">Gail Limited</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/documents" className="text-white">
            Documents
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/signup">
            <Button 
              color="success" 
              className="text-white font-semibold"
            >
              Login
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}