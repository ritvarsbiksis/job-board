'use client'

import { faEnvelope, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, RadioGroup, TextArea, TextField, Theme } from '@radix-ui/themes'
import { useState } from 'react'

import { CitySelect, CountrySelect, StateSelect } from 'react-country-state-city'
import 'react-country-state-city/dist/react-country-state-city.css'

import { ImageUpload } from '../image-upload/image-upload'

export const JobForm = () => {
  const [countryid, setCountryid] = useState(0)
  const [stateid, setstateid] = useState(0)

  return (
    <Theme>
      <form action="" className="container mt-6 flex flex-col gap-4">
        <TextField.Root size="3" placeholder="Job title" />
        <div className="grid grid-cols-3 gap-8">
          <div>
            Remote?
            <RadioGroup.Root defaultValue="hybrid" name="example">
              <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
              <RadioGroup.Item value="hybrid">Hybrid-remote</RadioGroup.Item>
              <RadioGroup.Item value="remote">Fully remote</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Full time?
            <RadioGroup.Root defaultValue="full" name="example">
              <RadioGroup.Item value="project">Project</RadioGroup.Item>
              <RadioGroup.Item value="part">Part-time</RadioGroup.Item>
              <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Salary
            <TextField.Root type="number" size="3">
              <TextField.Slot>€</TextField.Slot>
              <TextField.Slot>K / year</TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div>
          Location
          <div className="flex gap-4">
            <CountrySelect
              onChange={e => {
                setCountryid(e.id)
              }}
              placeHolder="Select Country"
            />
            <StateSelect
              countryid={countryid}
              onChange={e => {
                setstateid(e.id)
              }}
              placeHolder="Select State"
            />
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={e => {
                console.log(e)
              }}
              placeHolder="Select City"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="mb-2">Job icon</h3>
            <ImageUpload name="jobIcon" icon={faStar} />
          </div>
          <div className="col-span-2">
            <h3 className="mb-2">Contanct person</h3>
            <div className="flex gap-4">
              <div>
                <ImageUpload name="personImage" icon={faUser} />
              </div>
              <div className="flex flex-col gap-2 grow">
                <TextField.Root placeholder="John Doe" size="3">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faUser} />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder="Phone" type="tel" size="3">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faPhone} />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder="Email" type="email" size="3">
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        </div>
        <TextArea size="3" placeholder="Job description" resize="vertical" />
        <div className="flex justify-center">
          <Button size="3">
            <span className="px-8">Save</span>
          </Button>
        </div>
      </form>
    </Theme>
  )
}
