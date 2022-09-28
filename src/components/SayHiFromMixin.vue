<template>
    <div>
        {{hi('from view')}}
    </div>
</template>

<script>
import CommonHi from '@/mixin/common_hi';
export default {
    mixins: [CommonHi],
    mounted() {
        alert(this.hi('from script code'));
    }
}
</script>