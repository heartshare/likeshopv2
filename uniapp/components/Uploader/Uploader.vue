<template>
    <view class="uploader-container row wrap">
        <view class="upload-image-box" v-for="(item, index) in fileList" :key="index" :style="{width: previewSize, height: previewSize}">
            <custom-image class="img-preview" radius="10rpx" :src="item.url" :width="previewSize" :height="previewSize" />
            <view class="close-icon row-center" @click="deleteImage($event, index)">
                <uni-icons type="closeempty" size="15" color="white"></uni-icons>
            </view>
        </view>
        <view 
            class="uplader-upload row-center"
            :style="{width: previewSize, height: previewSize}"
            @click="handleImage"
            v-show="fileList.length == 0 || mutiple"
            v-if="!useSlot"
        >
            <uni-icons size="24" color="#dcdee0" type="camera" />
            <view type="image" accept="image/*" class="uploader-input" />
        </view>
        <view
        class="uplader-upload-slot row-center"
        :style="{width: previewSize, height: previewSize}"
        @click="handleImage"
        v-show="fileList.length == 0 || mutiple"
        v-else
        >
            <slot></slot>
        </view>
    </view>
</template>

<script>
    export default {
        name: "Uploader",
        props: {
            fileList: {
                type: Array,
                default: () => []
            },
            // 默认不允许多选图片
            mutiple: {
                type: Boolean,
                default: false
            },
            // 限制上传文件数量
            maxUpload: {
                type: Number,
                default: 1
            },
            previewSize: {
                type: String,
                default: "160rpx"
            },
            // 是否可删除
            deletable: {
                type: Boolean,
                default: false,
            },
            useSlot: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                
            }
        },
        create() {
            
        },
        methods: {
            handleImage() {
                uni.chooseImage({
                    count: this.mutiple ? this.maxUpload : 1,
                    success: (res) => {
                        this.$emit("after-read", res.tempFiles)
                    }
                })
            },
            deleteImage(e, index) {
                this.$emit('delete', index)
            }
        }
    }
    
    
</script>

<style lang="scss">
    .uploader-container {
        .upload-image-box {
            position: relative;
            margin-right: 8rpx;
            margin-bottom: 8rpx;
            .img-preview {
                
            }
            .close-icon {
                position: absolute;
                right: -20rpx;
                top: -15rpx;
                width: 40rpx;
                height: 40rpx;
                background-color: red;
                border-radius: 50%;
            }
        }
        .uplader-upload {
            position: relative;
            width: 160rpx;
            height: 160rpx;
            background-color: #f7f8fa;
            .uploader-input {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                opacity: 0;
                top: 0;
                left: 0;
                z-index: 10;
                cursor: pointer;
            }
        }
        .uplader-upload-slot {
            position: relative;
            width: 160rpx;
            height: 160rpx;
            .uploader-input {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                opacity: 0;
                top: 0;
                left: 0;
                z-index: 10;
                cursor: pointer;
            }
        }
    }
</style>
