import React from 'react'

import { Banner } from '@/base-components/Banner'

const largeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis vehicula neque vel congue. In ultrices placerat nibh. In neque purus, vestibulum ut tellus eu, eleifend tempor erat. Ut dapibus mauris felis, et ultrices risus facilisis et. Aenean nunc metus, vehicula in vestibulum quis, suscipit non nulla. Duis vitae turpis id eros iaculis accumsan. Etiam vitae dolor lorem. Nunc nec leo finibus, varius enim eget, dictum diam. Vivamus malesuada elit ut nulla ullamcorper, eget venenatis risus rhoncus. Quisque vel pellentesque tellus. Sed et diam feugiat, sodales justo at, condimentum est. Donec eget condimentum dui. Sed mi odio, tempor in erat eget, pretium lobortis arcu. Vivamus eu justo ac massa euismod pharetra ut eget nunc. Nam commodo, turpis sed tincidunt commodo, risus metus eleifend enim, at condimentum nisl ante ut mauris. Vestibulum non venenatis odio."
const shortText = "Lorem Ipsum"
export default function page() {
  return (
    <div>
      <Banner addClass="rounded-lg border-8 border-white p-4">
        {largeText}
      </Banner>
    </div>
  )
}
