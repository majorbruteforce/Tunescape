#include<iostream>
#include<bits/stdc++.h>

using namespace std;

vector<int> sortedArray(vector<int> a, vector<int> b) {
    int p = 0, q = 0;
    vector<int> res;

    while (p < a.size() && q < b.size()) {
        if (a[p] < b[q]) {
            res.push_back(a[p]);
            p++;
        } else if (a[p] > b[q]) {
            res.push_back(b[q]);
            q++;
        } else {
            res.push_back(a[p]);
            p++;
            q++;
        }
    }

    while (p < a.size()) {
        res.push_back(a[p]);
        p++;
    }

    while (q < b.size()) {
        res.push_back(b[q]);
        q++;
    }

    return res;
}

int main(){

    return 0;
}