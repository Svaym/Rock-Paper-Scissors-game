import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export const useAppSelector = useSelector.withTypes<RootState>()