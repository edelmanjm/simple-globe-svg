/**
 * todo description
 * @category Globe
 * @module Globe Projection Hooks
 */
import { useContext } from 'react'
import { ProjectionContext } from './Context'

export const useProjectionContext = () => useContext(ProjectionContext)
