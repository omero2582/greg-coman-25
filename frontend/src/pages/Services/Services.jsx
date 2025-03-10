import { useServicesAllQuery } from '@/hooks/cms/index'
import React from 'react'
import { Link } from 'react-router';

export default function Services() {

  const {data, isPending, isLoading, error} = useServicesAllQuery();

  if(isPending){
    return <div>Loading..</div>
  }

  if(error || !data){
    return <div>Service Not Found</div>
  }

  return (
    <div>
      <h1>Services</h1>
      <div className='grid'>{data.map(s => (
        <Link to={`/services/${s.slug.current}`}>
          {s.name}
        </Link>
      ))}</div>
    </div>
  )
}
