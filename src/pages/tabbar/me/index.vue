<script setup lang="ts">
import { actionList } from './data'
import { useUserStore } from '@/store'
import defaultAvatar from '@/static/images/me/avatar.png'

const userStore = useUserStore()

const userInfo = computed(() => {
  return userStore.getUserInfo
})

const actionHandle = async (name: string) => {
  if (name === 'logout') {
    await userStore.logout()
  }
}
</script>
<template>
  <view class="relative">
    <!-- nav -->
    <view class="relative">
      <image class="w-screen" src="../../../static/images/me/background.png" />
    </view>
    <!-- info -->
    <view class="info-box">
      <!-- avatar -->
      <view class="flex flex-col items-center">
        <view
          class="flex justify-center items-center w-135 h-135 rd-50% bg-white"
        >
          <image
            class="w-120 h-120 rd-50%"
            :src="userInfo.avatarUrl || defaultAvatar"
          />
        </view>

        <text class="mt-4 c-white text-x">
          {{ userInfo.realName || '未登录' }}
        </text>
        <view class="flex justify-center mt-2">
          <image class="w-40 h-40" src="../../../static/images/me/vb.png" />
          <text class="ml-1 c-white"> {{ userInfo.vb }} </text>
        </view>
      </view>
    </view>
    <!-- action list -->
    <view class="action-box">
      <view
        v-for="action in actionList"
        :key="action.name"
        class="action-box-list"
        @click="actionHandle(action.name)"
      >
        <!-- item left -->
        <view class="flex flex-1 items-center">
          <image class="w-58 h-58" :src="action.icon" />
          <text class="ml-3 text-x" color="#999">{{ action.title }}</text>
        </view>
        <!-- item right -->
        <!-- <uni-icons type="right" size="20" /> -->
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.info-box {
  position: absolute;
  top: 110rpx;
  height: 200rpx;
  left: 50%;
  transform: translateX(-50%);
}
.action-box {
  position: absolute;
  top: 400rpx;
  left: 28rpx;
  right: 28rpx;
  padding: 0 32rpx;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0px 0px 16px 0px rgba(146, 196, 238, 0.54);
  .action-box-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110rpx;
    border-bottom: 1rpx solid #e5e5e5;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
