import type { ProfileModel } from '../../models/profile'
import type { ProfileProtocol } from '../../protocols/profile'
import { Profile } from '../models/Profile'

export const dbUpdateProfile = async ({
  name,
  userId,
  address,
  preferences,
  helpContact,
  teams
}: ProfileProtocol): Promise<ProfileModel> => {
  const existingProfile = await Profile.find({ userId })

  if (!existingProfile.length) {
    const profile = await Profile.create({
      name,
      userId,
      address,
      preferences,
      helpContact,
      teams
    })

    return profile
  }

  const profile = await Profile.findOneAndUpdate(
    { userId },
    {
      name,
      address,
      preferences,
      helpContact,
      teams
    }
  )

  return profile
}
