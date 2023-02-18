/**
 * sets view port dimensions
 * @category Globe
 * @module Globe View FetchOnWindowResize
 */
import { useCallback, useEffect } from "react";
import { useOnWindowResize } from "../hooks";
import { MutableStates } from "../types";
import { ViewData } from "./classes";

interface FetchToBodyOnResizeProps {
  dispatch: MutableStates<number>["1"];
  target?: ViewData["target"];
}

/**
 * @category Component
 * @return null
 */
function FetchOnWindowResize({ dispatch, target }: FetchToBodyOnResizeProps) {
  const resize = useCallback<() => void>(() => {
    if (!target) return;
    const { clientWidth, clientHeight } = target;
    if (clientWidth && clientHeight) dispatch([clientWidth, clientHeight]);
  }, [dispatch, target]);
  useOnWindowResize(target ? resize : undefined);
  useEffect(() => {
    setTimeout(resize, 50);
  }, [resize]);
  return null;
}

export default FetchOnWindowResize;
