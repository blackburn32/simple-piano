<template>
    <div class="flex flex-col w-screen h-screen">
        <div class="flex flex-row w-full h-[60%] items-center justify-between z-10">
            <div class="w-[8.33%] h-full shrink-0 invisible"></div>
            <div
                class="w-[8.33%] h-full shrink-0 bg-black"
                @mousedown="playKey('c#')"
                @mouseup="stopKey('c#')"
                ref="cSharp"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                class="w-[8.33%] h-full shrink-0 bg-black"
                @mousedown="playKey('d#')"
                @mouseup="stopKey('d#')"
                ref="dSharp"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                class="w-[8.33%] h-full shrink-0 bg-black"
                @mousedown="playKey('f#')"
                @mouseup="stopKey('f#')"
                ref="fSharp"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                class="w-[8.33%] h-full shrink-0 bg-black"
                @mousedown="playKey('g#')"
                @mouseup="stopKey('g#')"
                ref="gSharp"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
            <div
                class="w-[8.33%] h-full shrink-0 bg-black"
                @mousedown="playKey('a#')"
                @mouseup="stopKey('a#')"
                ref="aSharp"
            />
            <div class="w-[8.33%] h-full shrink-0 invisible"/>
        </div>
        <div class="absolute flex flex-row w-full h-full items-center justify-between z-0">
            <div
                class="w-[14.285%] h-full border border-black"
                @mousedown="playKey('c')"
                @mouseup="stopKey('c')"
                ref="c"
            />
            <div
                class="w-[14.285%] h-full border border-black"
                @mousedown="playKey('d')"
                @mouseup="stopKey('d')"
                ref="d"
            />
            <div
                class="w-[14.285%] h-full border border-black"
                @mousedown="playKey('e')"
                @mouseup="stopKey('e')"
                ref="e"
            />
            <div
                class="w-[14.285%] h-full border border-black"
                @mousedown="playKey('f')"
                @mouseup="stopKey('f')"
                ref="f"
            />
            <div
                class="w-[14.285%] h-full border border-black"
                @mousedown="playKey('g')"
                @mouseup="stopKey('g')"
                ref="g"
            />
            <div
                class="w-[14.285%] h-full border border-black"
                @mousedown="playKey('a')"
                @mouseup="stopKey('a')"
                ref="a"
            />
            <div
                class="w-[14.285%] h-full border border-black"
                @mousedown="playKey('b')"
                @mouseup="stopKey('b')"
                ref="b"
            />
        </div>
        <NuxtLink class="absolute bottom-0 right-0" external="external" to="https://github.com/blackburn32">
            <Icon name="uil:github" color="black" size="32" class="hover:scale-125 mr-4 mb-4"/>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import {useSound} from '@vueuse/sound';
import {Howl} from 'howler';
import {Ref} from '#imports';

interface PlayOptions {
    id?: number;
    forceSoundEnabled?: boolean;
    playbackRate?: number;
}

type PlayFunction = (options?: PlayOptions) => void;

interface KeyController {
    play: PlayFunction;
    sound: Ref<Howl | null>;
    stop: (id?: number) => void;
    pause: (id?: number) => void;
    isPlaying: Ref<boolean>;
    duration: Ref<number | null>;
    domRef: Ref<HTMLDivElement | null>;
    sharp: boolean;
    keyboardKey: string;
    name: string;
}

const defaultSoundOptions = {
    volume: 1,
    soundEnabled: true,
    interrupt: true,
};

const a = ref<HTMLDivElement | null>(null);
const aSharp = ref<HTMLDivElement | null>(null);
const b = ref<HTMLDivElement | null>(null);
const c = ref<HTMLDivElement | null>(null);
const cSharp = ref<HTMLDivElement | null>(null);
const d = ref<HTMLDivElement | null>(null);
const dSharp = ref<HTMLDivElement | null>(null);
const e = ref<HTMLDivElement | null>(null);
const f = ref<HTMLDivElement | null>(null);
const fSharp = ref<HTMLDivElement | null>(null);
const g = ref<HTMLDivElement | null>(null);
const gSharp = ref<HTMLDivElement | null>(null);

const keys: Record<string, KeyController> = {
    'a': {
        ...useSound('/sounds/a.mp3', defaultSoundOptions),
        domRef: a,
        sharp: false,
        keyboardKey: 'h',
        name: 'a',
    },
    'a#': {
        ...useSound('/sounds/aSharp.mp3', defaultSoundOptions),
        domRef: aSharp,
        sharp: true,
        keyboardKey: 'u',
        name: 'a#',
    },
    'b': {
        ...useSound('/sounds/b.mp3', defaultSoundOptions),
        domRef: b,
        sharp: false,
        keyboardKey: 'j',
        name: 'b',
    },
    'c': {
        ...useSound('/sounds/c.mp3', defaultSoundOptions),
        domRef: c,
        sharp: false,
        keyboardKey: 'a',
        name: 'c',
    },
    'c#': {
        ...useSound('/sounds/cSharp.mp3', defaultSoundOptions),
        domRef: cSharp,
        sharp: true,
        keyboardKey: 'w',
        name: 'c#',
    },
    'd': {
        ...useSound('/sounds/d.mp3', defaultSoundOptions),
        domRef: d,
        sharp: false,
        keyboardKey: 's',
        name: 'd',
    },
    'd#': {
        ...useSound('/sounds/dSharp.mp3', defaultSoundOptions),
        domRef: dSharp,
        sharp: true,
        keyboardKey: 'e',
        name: 'd#',
    },
    'e': {
        ...useSound('/sounds/e.mp3', defaultSoundOptions),
        domRef: e,
        sharp: false,
        keyboardKey: 'd',
        name: 'e',
    },
    'f': {
        ...useSound('/sounds/f.mp3', defaultSoundOptions),
        domRef: f,
        sharp: false,
        keyboardKey: 'f',
        name: 'f',
    },
    'f#': {
        ...useSound('/sounds/fSharp.mp3', defaultSoundOptions),
        domRef: fSharp,
        sharp: true,
        keyboardKey: 't',
        name: 'f#',
    },
    'g': {
        ...useSound('/sounds/g.mp3', defaultSoundOptions),
        domRef: g,
        sharp: false,
        keyboardKey: 'g',
        name: 'g',
    },
    'g#': {
        ...useSound('/sounds/gSharp.mp3', defaultSoundOptions),
        domRef: gSharp,
        sharp: true,
        keyboardKey: 'y',
        name: 'g#',
    },
};

function getKeyPressClasses(keyName: string) {
    const key = keys[keyName];
    return key.sharp ? ['bg-gray-900'] : ['bg-gray-100'];
}

function playKey(keyName: string) {
    const key = keys[keyName];
    const pressedClasses = getKeyPressClasses(keyName);
    key.domRef.value?.classList.add(...pressedClasses);
    key.play();
    key.sound.value?.fade(0, 1, 100);
    key.sound.value?.on('end', () => {
        stopKey(keyName);
    });
    playing.add(keyName);
}

function stopKey(keyName: string) {
    const key = keys[keyName];
    key.sound.value?.fade(1, 0, 1000);
    const pressedClasses = getKeyPressClasses(keyName);
    key.domRef.value?.classList.remove(...pressedClasses);
    playing.delete(keyName);
}

function getKeyFromKeyboardKey(keyboardKey: string) {
    return Object.values(keys).find((key) => key.keyboardKey === keyboardKey);
}

const playing: Set<string> = new Set();

onMounted(() => {
    window.addEventListener('keypress', (e) => {
        if(e.repeat){
            return;
        }
        const keyboardKey = e.key.toLowerCase();
        const key = getKeyFromKeyboardKey(keyboardKey);
        if(key && !playing.has(key.name)){
            playKey(key.name);
        }
    });
    window.addEventListener('keyup', (e) => {
        const keyboardKey = e.key.toLowerCase();
        const key = getKeyFromKeyboardKey(keyboardKey);
        if(key){
            stopKey(key.name);
        }
    });
});
</script>