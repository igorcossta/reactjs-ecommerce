import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, TypedDispatch } from '../redux/store';

export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
