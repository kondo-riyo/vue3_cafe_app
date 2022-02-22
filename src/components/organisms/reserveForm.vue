<template>
    <div class="reserve-form">
        <div class="reserve-form__head">
            <div class="reserve-form__head-title">2022年 2月 21日(火)</div>
        </div>
        <div class="reserve-form__body">
            <div class="reserve-form__body-time">
                <div>Time</div>
                <input/>
            </div>
            <div class="reserve-form__body-people">
                <div>人数</div>
                <input/>
            </div>
            <div class="reserve-form__body-name">
                <div>Name</div><input/>
            </div>
            <div class="reserve-form__body-mail">
                <div>Mail</div><input/>
            </div>
            <div class="reserve-form__body-tel">
                <div>Tel</div><input/>
            </div>
            <div class="reserve-form__body-note">
                <div>備考</div><textarea cols="30" rows="2"/>
            </div>
        </div>
        <div class="reserve-form__foot">
            <div class="reserve-form__foot-caution">
                ー注意ー
                <p>※1. 予約の変更・キャンセルは電話のみの受付となります。<br/>
                ※2. 予約時間より10分過ぎますと、予約はキャンセルとなりますので、ご了承ください。<br/></p>
                <input type="checkbox"/>上記の内容に同意する
            </div>
            <div>
                <button class="reserve-form__foot-btn">予約を確定する</button>
            </div>
        </div>
        <div></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Reserve',
    
})
</script>
<style lang="scss">
@import '../../css/style.scss';

.reserve-form {
    // background-color: $base_of;
    // border-radius: 20px;
    width: 100%;
}

.reserve-form__head {
    font-size: xx-large;
    // padding: ;
    border-bottom: 5px solid $base_pink_brown;
    width: 100%;

}
.reserve-form__head-title {
    padding: 0.3rem 2rem;
}

.reserve-form__body {
    text-align: start;
    padding: 1rem;
    font-size: large;
    //Grid設定------------
    display: grid;
    grid-template: 
    "time people"
    "name mail" 
    "tel note" 
    // "note note" 
}
@mixin reserve-form__body-form($width) {
    color: $base_pink_brown;
    font-weight: 500;
    div {
        font-size: small;
    }
    input {
        background-color: lighten($base_pink_brown, 30%);
        border: 0;
        width: $width;
        height: 1.7rem;
        border-radius: 5px;
        color: $base_brown;
        font-size: medium;
        // margin: 0 0.5rem;
    &:focus {
        outline: none;
    }
    }
}
.reserve-form__body-time {
    @include reserve-form__body-form(80%);
    grid-area: time;
}
.reserve-form__body-people {
    @include reserve-form__body-form(80%);
    grid-area: people;
}
.reserve-form__body-name {
    @include reserve-form__body-form(80%);
    grid-area: name;
}
.reserve-form__body-mail {
    @include reserve-form__body-form(80%);
    grid-area: mail;
}
.reserve-form__body-tel {
    @include reserve-form__body-form(80%);
    grid-area: tel;
}
.reserve-form__body-note {
    color: $base_pink_brown;
    font-weight: 500;
    div {
        font-size: small;
    }
    textarea {
        background-color: lighten($base_pink_brown, 30%);
        border: 0;
        width: 80%;
        // height: 1.7rem;
        border-radius: 5px;
        color: $base_brown;
        font-size: medium;
        &:focus {
            outline: none;
        }
    }
    // @include reserve-form__body-form;
    grid-area: note;
}

.reserve-form__foot-caution {
    color: black;
    font-size: small;
    margin: 0 2rem 1rem 2rem;
    p {
        text-align: start;
        font-weight: normal;
    }
}
.reserve-form__foot-btn {
    background-color: $base_pink_brown;
    padding: 0.3rem 3rem;
    border-radius: 9999px;
    border:0;
    //text-------
    color: white;
    font-weight: 600;
    font-size: large;
}
</style>