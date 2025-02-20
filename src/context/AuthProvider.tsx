//create global provider here
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { auth } from "@/utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import resetForm from "@/utils/resetForm";
