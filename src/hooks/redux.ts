import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppStore, RootState} from '@/core/store/store';

export const useTypedDispatch = useDispatch<AppStore>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
