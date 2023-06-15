function MergeObject(obj1 , obj2) {
    let ans = obj1;
    Object.keys(obj2).forEach((key) => {
        ans[key]=obj1[key]?obj1[key]+obj2[key]: obj2[key];
    });
    return ans;
    }
    var obj1 = {
        name : "kalkesh ch",
        empId : 55658,
        state : "TS"
    };
    var obj2 = {
        tech : "React",
        state : "AP"
    };
    console.log(MergeObject(obj1,obj2));
        