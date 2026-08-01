import { useAppDispatch, useAppSelector } from './hooks'
import { apiSlice } from '@/services/apiSlice'
import { RootState, AppDispatch } from '@/store/store'

export { useAppDispatch, useAppSelector, apiSlice, type RootState, type AppDispatch }
