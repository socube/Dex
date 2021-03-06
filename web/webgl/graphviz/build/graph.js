/*!
  MIT License

  Copyright (c) 2011 David Piegza
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
  documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of
  the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var THREE = THREE || {};
if (!window.Int32Array) {
    window.Int32Array = Array, window.Float32Array = Array
}
THREE.Color = function (c) {
    c !== void 0 && this.setHex(c);
    return this
};
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    copy: function (c) {
        this.r = c.r;
        this.g = c.g;
        this.b = c.b;
        return this
    },
    setRGB: function (f, k, h) {
        this.r = f;
        this.g = k;
        this.b = h;
        return this
    },
    setHSV: function (n, u, t) {
        var p, o, k;
        if (t == 0) {
            this.r = this.g = this.b = 0
        } else {
            switch (p = Math.floor(n * 6), o = n * 6 - p, n = t * (1 - u), k = t * (1 - u * o), u = t * (1 - u * (1 - o)), p) {
                case 1:
                    this.r = k;
                    this.g = t;
                    this.b = n;
                    break;
                case 2:
                    this.r = n;
                    this.g = t;
                    this.b = u;
                    break;
                case 3:
                    this.r = n;
                    this.g = k;
                    this.b = t;
                    break;
                case 4:
                    this.r = u;
                    this.g = n;
                    this.b = t;
                    break;
                case 5:
                    this.r = t;
                    this.g = n;
                    this.b = k;
                    break;
                case 6:
                case 0:
                    this.r = t, this.g = u, this.b = n
            }
        }
        return this
    },
    setHex: function (c) {
        c = Math.floor(c);
        this.r = (c >> 16 & 255) / 255;
        this.g = (c >> 8 & 255) / 255;
        this.b = (c & 255) / 255;
        return this
    },
    getHex: function () {
        return~~ (this.r * 255) << 16 ^ ~~ (this.g * 255) << 8 ^ ~~ (this.b * 255)
    },
    getContextStyle: function () {
        return "rgb(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")"
    },
    clone: function () {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
};
THREE.Vector2 = function (e, f) {
    this.x = e || 0;
    this.y = f || 0
};
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function (e, f) {
        this.x = e;
        this.y = f;
        return this
    },
    copy: function (c) {
        this.x = c.x;
        this.y = c.y;
        return this
    },
    clone: function () {
        return new THREE.Vector2(this.x, this.y)
    },
    add: function (e, f) {
        this.x = e.x + f.x;
        this.y = e.y + f.y;
        return this
    },
    addSelf: function (c) {
        this.x += c.x;
        this.y += c.y;
        return this
    },
    sub: function (e, f) {
        this.x = e.x - f.x;
        this.y = e.y - f.y;
        return this
    },
    subSelf: function (c) {
        this.x -= c.x;
        this.y -= c.y;
        return this
    },
    multiplyScalar: function (c) {
        this.x *= c;
        this.y *= c;
        return this
    },
    divideScalar: function (c) {
        c ? (this.x /= c, this.y /= c) : this.set(0, 0);
        return this
    },
    negate: function () {
        return this.multiplyScalar(-1)
    },
    dot: function (c) {
        return this.x * c.x + this.y * c.y
    },
    lengthSq: function () {
        return this.x * this.x + this.y * this.y
    },
    length: function () {
        return Math.sqrt(this.lengthSq())
    },
    normalize: function () {
        return this.divideScalar(this.length())
    },
    distanceTo: function (c) {
        return Math.sqrt(this.distanceToSquared(c))
    },
    distanceToSquared: function (e) {
        var f = this.x - e.x,
            e = this.y - e.y;
        return f * f + e * e
    },
    setLength: function (c) {
        return this.normalize().multiplyScalar(c)
    },
    equals: function (c) {
        return c.x == this.x && c.y == this.y
    }
};
THREE.Vector3 = function (f, k, h) {
    this.x = f || 0;
    this.y = k || 0;
    this.z = h || 0
};
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function (f, k, h) {
        this.x = f;
        this.y = k;
        this.z = h;
        return this
    },
    copy: function (c) {
        this.x = c.x;
        this.y = c.y;
        this.z = c.z;
        return this
    },
    clone: function () {
        return new THREE.Vector3(this.x, this.y, this.z)
    },
    add: function (e, f) {
        this.x = e.x + f.x;
        this.y = e.y + f.y;
        this.z = e.z + f.z;
        return this
    },
    addSelf: function (c) {
        this.x += c.x;
        this.y += c.y;
        this.z += c.z;
        return this
    },
    addScalar: function (c) {
        this.x += c;
        this.y += c;
        this.z += c;
        return this
    },
    sub: function (e, f) {
        this.x = e.x - f.x;
        this.y = e.y - f.y;
        this.z = e.z - f.z;
        return this
    },
    subSelf: function (c) {
        this.x -= c.x;
        this.y -= c.y;
        this.z -= c.z;
        return this
    },
    multiply: function (e, f) {
        this.x = e.x * f.x;
        this.y = e.y * f.y;
        this.z = e.z * f.z;
        return this
    },
    multiplySelf: function (c) {
        this.x *= c.x;
        this.y *= c.y;
        this.z *= c.z;
        return this
    },
    multiplyScalar: function (c) {
        this.x *= c;
        this.y *= c;
        this.z *= c;
        return this
    },
    divideSelf: function (c) {
        this.x /= c.x;
        this.y /= c.y;
        this.z /= c.z;
        return this
    },
    divideScalar: function (c) {
        c ? (this.x /= c, this.y /= c, this.z /= c) : this.set(0, 0, 0);
        return this
    },
    negate: function () {
        return this.multiplyScalar(-1)
    },
    dot: function (c) {
        return this.x * c.x + this.y * c.y + this.z * c.z
    },
    lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function () {
        return Math.sqrt(this.lengthSq())
    },
    lengthManhattan: function () {
        return this.x + this.y + this.z
    },
    normalize: function () {
        return this.divideScalar(this.length())
    },
    setLength: function (c) {
        return this.normalize().multiplyScalar(c)
    },
    cross: function (e, f) {
        this.x = e.y * f.z - e.z * f.y;
        this.y = e.z * f.x - e.x * f.z;
        this.z = e.x * f.y - e.y * f.x;
        return this
    },
    crossSelf: function (c) {
        return this.set(this.y * c.z - this.z * c.y, this.z * c.x - this.x * c.z, this.x * c.y - this.y * c.x)
    },
    distanceTo: function (c) {
        return Math.sqrt(this.distanceToSquared(c))
    },
    distanceToSquared: function (c) {
        return (new THREE.Vector3).sub(this, c).lengthSq()
    },
    setPositionFromMatrix: function (c) {
        this.x = c.n14;
        this.y = c.n24;
        this.z = c.n34
    },
    setRotationFromMatrix: function (e) {
        var f = Math.cos(this.y);
        this.y = Math.asin(e.n13);
        Math.abs(f) > 0.00001 ? (this.x = Math.atan2(-e.n23 / f, e.n33 / f), this.z = Math.atan2(-e.n12 / f, e.n11 / f)) : (this.x = 0, this.z = Math.atan2(e.n21, e.n22))
    },
    isZero: function () {
        return this.lengthSq() < 0.0001
    }
};
THREE.Vector4 = function (h, n, m, k) {
    this.x = h || 0;
    this.y = n || 0;
    this.z = m || 0;
    this.w = k || 1
};
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function (h, n, m, k) {
        this.x = h;
        this.y = n;
        this.z = m;
        this.w = k;
        return this
    },
    copy: function (c) {
        this.x = c.x;
        this.y = c.y;
        this.z = c.z;
        this.w = c.w || 1
    },
    clone: function () {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    },
    add: function (e, f) {
        this.x = e.x + f.x;
        this.y = e.y + f.y;
        this.z = e.z + f.z;
        this.w = e.w + f.w;
        return this
    },
    addSelf: function (c) {
        this.x += c.x;
        this.y += c.y;
        this.z += c.z;
        this.w += c.w;
        return this
    },
    sub: function (e, f) {
        this.x = e.x - f.x;
        this.y = e.y - f.y;
        this.z = e.z - f.z;
        this.w = e.w - f.w;
        return this
    },
    subSelf: function (c) {
        this.x -= c.x;
        this.y -= c.y;
        this.z -= c.z;
        this.w -= c.w;
        return this
    },
    multiplyScalar: function (c) {
        this.x *= c;
        this.y *= c;
        this.z *= c;
        this.w *= c;
        return this
    },
    divideScalar: function (c) {
        c ? (this.x /= c, this.y /= c, this.z /= c, this.w /= c) : (this.z = this.y = this.x = 0, this.w = 1);
        return this
    },
    negate: function () {
        return this.multiplyScalar(-1)
    },
    dot: function (c) {
        return this.x * c.x + this.y * c.y + this.z * c.z + this.w * c.w
    },
    lengthSq: function () {
        return this.dot(this)
    },
    length: function () {
        return Math.sqrt(this.lengthSq())
    },
    normalize: function () {
        return this.divideScalar(this.length())
    },
    setLength: function (c) {
        return this.normalize().multiplyScalar(c)
    },
    lerpSelf: function (e, f) {
        this.x += (e.x - this.x) * f;
        this.y += (e.y - this.y) * f;
        this.z += (e.z - this.z) * f;
        this.w += (e.w - this.w) * f;
        return this
    }
};
THREE.Ray = function (e, f) {
    this.origin = e || new THREE.Vector3;
    this.direction = f || new THREE.Vector3
};
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    intersectScene: function (c) {
        return this.intersectObjects(c.objects)
    },
    intersectObjects: function (h) {
        var n, m, k = [];
        n = 0;
        for (m = h.length; n < m; n++) {
            k = k.concat(this.intersectObject(h[n]))
        }
        k.sort(function (c, f) {
            return c.distance - f.distance
        });
        return k
    },
    intersectObject: function (L) {
        function J(h, m, n) {
            var k;
            k = n.clone().subSelf(h).dot(m);
            if (k <= 0) {
                return null
            }
            h = h.clone().addSelf(m.clone().multiplyScalar(k));
            return n.distanceTo(h)
        }
        function H(m, u, v, t) {
            var t = t.clone().subSelf(u),
                v = v.clone().subSelf(u),
                p = m.clone().subSelf(u),
                m = t.dot(t),
                u = t.dot(v),
                t = t.dot(p),
                n = v.dot(v),
                v = v.dot(p),
                p = 1 / (m * n - u * u),
                n = (n * t - u * v) * p,
                m = (m * v - u * t) * p;
            return n > 0 && m > 0 && n + m < 1
        }
        if (L instanceof THREE.Particle) {
            var G = J(this.origin, this.direction, L.matrixWorld.getPosition());
            if (G == null || G > L.scale.x) {
                return []
            }
            return [{
                distance: G,
                point: L.position,
                face: null,
                object: L
            }]
        } else {
            if (L instanceof THREE.Mesh) {
                G = J(this.origin, this.direction, L.matrixWorld.getPosition());
                if (G == null || G > L.geometry.boundingSphere.radius * Math.max(L.scale.x, Math.max(L.scale.y, L.scale.z))) {
                    return []
                }
                var F, D, E, C, P, A, O, Q, M, N, I = L.geometry,
                    K = I.vertices,
                    o = [],
                    G = 0;
                for (F = I.faces.length; G < F; G++) {
                    if (D = I.faces[G], M = this.origin.clone(), N = this.direction.clone(), A = L.matrixWorld, E = A.multiplyVector3(D.centroid.clone()).subSelf(M), Q = E.dot(N), !(Q <= 0) && (E = A.multiplyVector3(K[D.a].position.clone()), C = A.multiplyVector3(K[D.b].position.clone()), P = A.multiplyVector3(K[D.c].position.clone()), A = D instanceof THREE.Face4 ? A.multiplyVector3(K[D.d].position.clone()) : null, O = L.matrixRotationWorld.multiplyVector3(D.normal.clone()), Q = N.dot(O), L.doubleSided || (L.flipSided ? Q > 0 : Q < 0))) {
                        if (Q = O.dot((new THREE.Vector3).sub(E, M)) / Q, M = M.addSelf(N.multiplyScalar(Q)), D instanceof THREE.Face3) {
                            H(M, E, C, P) && (D = {
                                distance: this.origin.distanceTo(M),
                                point: M,
                                face: D,
                                object: L
                            }, o.push(D))
                        } else {
                            if (D instanceof THREE.Face4 && (H(M, E, C, A) || H(M, C, P, A))) {
                                D = {
                                    distance: this.origin.distanceTo(M),
                                    point: M,
                                    face: D,
                                    object: L
                                }, o.push(D)
                            }
                        }
                    }
                }
                o.sort(function (c, f) {
                    return c.distance - f.distance
                });
                return o
            } else {
                return []
            }
        }
    }
};
THREE.Rectangle = function () {
    function p() {
        o = v - y;
        t = u - w
    }
    var y, w, v, u, o, t, x = !0;
    this.getX = function () {
        return y
    };
    this.getY = function () {
        return w
    };
    this.getWidth = function () {
        return o
    };
    this.getHeight = function () {
        return t
    };
    this.getLeft = function () {
        return y
    };
    this.getTop = function () {
        return w
    };
    this.getRight = function () {
        return v
    };
    this.getBottom = function () {
        return u
    };
    this.set = function (e, b, c, f) {
        x = !1;
        y = e;
        w = b;
        v = c;
        u = f;
        p()
    };
    this.addPoint = function (c, b) {
        x ? (x = !1, y = c, w = b, v = c, u = b) : (y = y < c ? y : c, w = w < b ? w : b, v = v > c ? v : c, u = u > b ? u : b);
        p()
    };
    this.add3Points = function (h, c, f, n, b, e) {
        x ? (x = !1, y = h < f ? h < b ? h : b : f < b ? f : b, w = c < n ? c < e ? c : e : n < e ? n : e, v = h > f ? h > b ? h : b : f > b ? f : b, u = c > n ? c > e ? c : e : n > e ? n : e) : (y = h < f ? h < b ? h < y ? h : y : b < y ? b : y : f < b ? f < y ? f : y : b < y ? b : y, w = c < n ? c < e ? c < w ? c : w : e < w ? e : w : n < e ? n < w ? n : w : e < w ? e : w, v = h > f ? h > b ? h > v ? h : v : b > v ? b : v : f > b ? f > v ? f : v : b > v ? b : v, u = c > n ? c > e ? c > u ? c : u : e > u ? e : u : n > e ? n > u ? n : u : e > u ? e : u);
        p()
    };
    this.addRectangle = function (b) {
        x ? (x = !1, y = b.getLeft(), w = b.getTop(), v = b.getRight(), u = b.getBottom()) : (y = y < b.getLeft() ? y : b.getLeft(), w = w < b.getTop() ? w : b.getTop(), v = v > b.getRight() ? v : b.getRight(), u = u > b.getBottom() ? u : b.getBottom());
        p()
    };
    this.inflate = function (b) {
        y -= b;
        w -= b;
        v += b;
        u += b;
        p()
    };
    this.minSelf = function (b) {
        y = y > b.getLeft() ? y : b.getLeft();
        w = w > b.getTop() ? w : b.getTop();
        v = v < b.getRight() ? v : b.getRight();
        u = u < b.getBottom() ? u : b.getBottom();
        p()
    };
    this.instersects = function (c) {
        return Math.min(v, c.getRight()) - Math.max(y, c.getLeft()) >= 0 && Math.min(u, c.getBottom()) - Math.max(w, c.getTop()) >= 0
    };
    this.empty = function () {
        x = !0;
        u = v = w = y = 0;
        p()
    };
    this.isEmpty = function () {
        return x
    }
};
THREE.Matrix3 = function () {
    this.m = []
};
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    transpose: function () {
        var e, f = this.m;
        e = f[1];
        f[1] = f[3];
        f[3] = e;
        e = f[2];
        f[2] = f[6];
        f[6] = e;
        e = f[5];
        f[5] = f[7];
        f[7] = e;
        return this
    },
    transposeIntoArray: function (e) {
        var f = this.m;
        e[0] = f[0];
        e[1] = f[3];
        e[2] = f[6];
        e[3] = f[1];
        e[4] = f[4];
        e[5] = f[7];
        e[6] = f[2];
        e[7] = f[5];
        e[8] = f[8];
        return this
    }
};
THREE.Matrix4 = function (J, H, F, E, D, B, C, A, N, o, M, O, K, L, G, I) {
    this.set(J || 1, H || 0, F || 0, E || 0, D || 0, B || 1, C || 0, A || 0, N || 0, o || 0, M || 1, O || 0, K || 0, L || 0, G || 0, I || 1);
    this.flat = Array(16);
    this.m33 = new THREE.Matrix3
};
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (J, H, F, E, D, B, C, A, N, o, M, O, K, L, G, I) {
        this.n11 = J;
        this.n12 = H;
        this.n13 = F;
        this.n14 = E;
        this.n21 = D;
        this.n22 = B;
        this.n23 = C;
        this.n24 = A;
        this.n31 = N;
        this.n32 = o;
        this.n33 = M;
        this.n34 = O;
        this.n41 = K;
        this.n42 = L;
        this.n43 = G;
        this.n44 = I;
        return this
    },
    identity: function () {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    copy: function (c) {
        this.set(c.n11, c.n12, c.n13, c.n14, c.n21, c.n22, c.n23, c.n24, c.n31, c.n32, c.n33, c.n34, c.n41, c.n42, c.n43, c.n44);
        return this
    },
    lookAt: function (n, u, t) {
        var p = THREE.Matrix4.__v1,
            o = THREE.Matrix4.__v2,
            k = THREE.Matrix4.__v3;
        k.sub(n, u).normalize();
        if (k.length() === 0) {
            k.z = 1
        }
        p.cross(t, k).normalize();
        p.length() === 0 && (k.x += 0.0001, p.cross(t, k).normalize());
        o.cross(k, p).normalize();
        this.n11 = p.x;
        this.n12 = o.x;
        this.n13 = k.x;
        this.n21 = p.y;
        this.n22 = o.y;
        this.n23 = k.y;
        this.n31 = p.z;
        this.n32 = o.z;
        this.n33 = k.z;
        return this
    },
    multiplyVector3: function (k) {
        var p = k.x,
            o = k.y,
            n = k.z,
            m = 1 / (this.n41 * p + this.n42 * o + this.n43 * n + this.n44);
        k.x = (this.n11 * p + this.n12 * o + this.n13 * n + this.n14) * m;
        k.y = (this.n21 * p + this.n22 * o + this.n23 * n + this.n24) * m;
        k.z = (this.n31 * p + this.n32 * o + this.n33 * n + this.n34) * m;
        return k
    },
    multiplyVector4: function (k) {
        var p = k.x,
            o = k.y,
            n = k.z,
            m = k.w;
        k.x = this.n11 * p + this.n12 * o + this.n13 * n + this.n14 * m;
        k.y = this.n21 * p + this.n22 * o + this.n23 * n + this.n24 * m;
        k.z = this.n31 * p + this.n32 * o + this.n33 * n + this.n34 * m;
        k.w = this.n41 * p + this.n42 * o + this.n43 * n + this.n44 * m;
        return k
    },
    rotateAxis: function (h) {
        var n = h.x,
            m = h.y,
            k = h.z;
        h.x = n * this.n11 + m * this.n12 + k * this.n13;
        h.y = n * this.n21 + m * this.n22 + k * this.n23;
        h.z = n * this.n31 + m * this.n32 + k * this.n33;
        h.normalize();
        return h
    },
    crossVector: function (e) {
        var f = new THREE.Vector4;
        f.x = this.n11 * e.x + this.n12 * e.y + this.n13 * e.z + this.n14 * e.w;
        f.y = this.n21 * e.x + this.n22 * e.y + this.n23 * e.z + this.n24 * e.w;
        f.z = this.n31 * e.x + this.n32 * e.y + this.n33 * e.z + this.n34 * e.w;
        f.w = e.w ? this.n41 * e.x + this.n42 * e.y + this.n43 * e.z + this.n44 * e.w : 1;
        return f
    },
    multiply: function (ay, ax) {
        var aw = ay.n11,
            av = ay.n12,
            au = ay.n13,
            ar = ay.n14,
            at = ay.n21,
            aq = ay.n22,
            ai = ay.n23,
            ao = ay.n24,
            ag = ay.n31,
            ak = ay.n32,
            ac = ay.n33,
            ae = ay.n34,
            Z = ay.n41,
            aa = ay.n42,
            an = ay.n43,
            al = ay.n44,
            af = ax.n11,
            ad = ax.n12,
            aj = ax.n13,
            T = ax.n14,
            ah = ax.n21,
            ab = ax.n22,
            am = ax.n23,
            Y = ax.n24,
            J = ax.n31,
            X = ax.n32,
            R = ax.n33,
            M = ax.n34,
            Q = ax.n41,
            ap = ax.n42,
            A = ax.n43,
            V = ax.n44;
        this.n11 = aw * af + av * ah + au * J + ar * Q;
        this.n12 = aw * ad + av * ab + au * X + ar * ap;
        this.n13 = aw * aj + av * am + au * R + ar * A;
        this.n14 = aw * T + av * Y + au * M + ar * V;
        this.n21 = at * af + aq * ah + ai * J + ao * Q;
        this.n22 = at * ad + aq * ab + ai * X + ao * ap;
        this.n23 = at * aj + aq * am + ai * R + ao * A;
        this.n24 = at * T + aq * Y + ai * M + ao * V;
        this.n31 = ag * af + ak * ah + ac * J + ae * Q;
        this.n32 = ag * ad + ak * ab + ac * X + ae * ap;
        this.n33 = ag * aj + ak * am + ac * R + ae * A;
        this.n34 = ag * T + ak * Y + ac * M + ae * V;
        this.n41 = Z * af + aa * ah + an * J + al * Q;
        this.n42 = Z * ad + aa * ab + an * X + al * ap;
        this.n43 = Z * aj + aa * am + an * R + al * A;
        this.n44 = Z * T + aa * Y + an * M + al * V;
        return this
    },
    multiplyToArray: function (f, k, h) {
        this.multiply(f, k);
        h[0] = this.n11;
        h[1] = this.n21;
        h[2] = this.n31;
        h[3] = this.n41;
        h[4] = this.n12;
        h[5] = this.n22;
        h[6] = this.n32;
        h[7] = this.n42;
        h[8] = this.n13;
        h[9] = this.n23;
        h[10] = this.n33;
        h[11] = this.n43;
        h[12] = this.n14;
        h[13] = this.n24;
        h[14] = this.n34;
        h[15] = this.n44;
        return this
    },
    multiplySelf: function (c) {
        this.multiply(this, c);
        return this
    },
    multiplyScalar: function (c) {
        this.n11 *= c;
        this.n12 *= c;
        this.n13 *= c;
        this.n14 *= c;
        this.n21 *= c;
        this.n22 *= c;
        this.n23 *= c;
        this.n24 *= c;
        this.n31 *= c;
        this.n32 *= c;
        this.n33 *= c;
        this.n34 *= c;
        this.n41 *= c;
        this.n42 *= c;
        this.n43 *= c;
        this.n44 *= c;
        return this
    },
    determinant: function () {
        var J = this.n11,
            H = this.n12,
            F = this.n13,
            E = this.n14,
            D = this.n21,
            B = this.n22,
            C = this.n23,
            A = this.n24,
            N = this.n31,
            o = this.n32,
            M = this.n33,
            O = this.n34,
            K = this.n41,
            L = this.n42,
            G = this.n43,
            I = this.n44;
        return E * C * o * K - F * A * o * K - E * B * M * K + H * A * M * K + F * B * O * K - H * C * O * K - E * C * N * L + F * A * N * L + E * D * M * L - J * A * M * L - F * D * O * L + J * C * O * L + E * B * N * G - H * A * N * G - E * D * o * G + J * A * o * G + H * D * O * G - J * B * O * G - F * B * N * I + H * C * N * I + F * D * o * I - J * C * o * I - H * D * M * I + J * B * M * I
    },
    transpose: function () {
        var c;
        c = this.n21;
        this.n21 = this.n12;
        this.n12 = c;
        c = this.n31;
        this.n31 = this.n13;
        this.n13 = c;
        c = this.n32;
        this.n32 = this.n23;
        this.n23 = c;
        c = this.n41;
        this.n41 = this.n14;
        this.n14 = c;
        c = this.n42;
        this.n42 = this.n24;
        this.n24 = c;
        c = this.n43;
        this.n43 = this.n34;
        this.n43 = c;
        return this
    },
    clone: function () {
        var c = new THREE.Matrix4;
        c.n11 = this.n11;
        c.n12 = this.n12;
        c.n13 = this.n13;
        c.n14 = this.n14;
        c.n21 = this.n21;
        c.n22 = this.n22;
        c.n23 = this.n23;
        c.n24 = this.n24;
        c.n31 = this.n31;
        c.n32 = this.n32;
        c.n33 = this.n33;
        c.n34 = this.n34;
        c.n41 = this.n41;
        c.n42 = this.n42;
        c.n43 = this.n43;
        c.n44 = this.n44;
        return c
    },
    flatten: function () {
        this.flat[0] = this.n11;
        this.flat[1] = this.n21;
        this.flat[2] = this.n31;
        this.flat[3] = this.n41;
        this.flat[4] = this.n12;
        this.flat[5] = this.n22;
        this.flat[6] = this.n32;
        this.flat[7] = this.n42;
        this.flat[8] = this.n13;
        this.flat[9] = this.n23;
        this.flat[10] = this.n33;
        this.flat[11] = this.n43;
        this.flat[12] = this.n14;
        this.flat[13] = this.n24;
        this.flat[14] = this.n34;
        this.flat[15] = this.n44;
        return this.flat
    },
    flattenToArray: function (c) {
        c[0] = this.n11;
        c[1] = this.n21;
        c[2] = this.n31;
        c[3] = this.n41;
        c[4] = this.n12;
        c[5] = this.n22;
        c[6] = this.n32;
        c[7] = this.n42;
        c[8] = this.n13;
        c[9] = this.n23;
        c[10] = this.n33;
        c[11] = this.n43;
        c[12] = this.n14;
        c[13] = this.n24;
        c[14] = this.n34;
        c[15] = this.n44;
        return c
    },
    flattenToArrayOffset: function (e, f) {
        e[f] = this.n11;
        e[f + 1] = this.n21;
        e[f + 2] = this.n31;
        e[f + 3] = this.n41;
        e[f + 4] = this.n12;
        e[f + 5] = this.n22;
        e[f + 6] = this.n32;
        e[f + 7] = this.n42;
        e[f + 8] = this.n13;
        e[f + 9] = this.n23;
        e[f + 10] = this.n33;
        e[f + 11] = this.n43;
        e[f + 12] = this.n14;
        e[f + 13] = this.n24;
        e[f + 14] = this.n34;
        e[f + 15] = this.n44;
        return e
    },
    setTranslation: function (f, k, h) {
        this.set(1, 0, 0, f, 0, 1, 0, k, 0, 0, 1, h, 0, 0, 0, 1);
        return this
    },
    setScale: function (f, k, h) {
        this.set(f, 0, 0, 0, 0, k, 0, 0, 0, 0, h, 0, 0, 0, 0, 1);
        return this
    },
    setRotationX: function (e) {
        var f = Math.cos(e),
            e = Math.sin(e);
        this.set(1, 0, 0, 0, 0, f, -e, 0, 0, e, f, 0, 0, 0, 0, 1);
        return this
    },
    setRotationY: function (e) {
        var f = Math.cos(e),
            e = Math.sin(e);
        this.set(f, 0, e, 0, 0, 1, 0, 0, -e, 0, f, 0, 0, 0, 0, 1);
        return this
    },
    setRotationZ: function (e) {
        var f = Math.cos(e),
            e = Math.sin(e);
        this.set(f, -e, 0, 0, e, f, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    setRotationAxis: function (B, A) {
        var z = Math.cos(A),
            y = Math.sin(A),
            x = 1 - z,
            v = B.x,
            w = B.y,
            t = B.z,
            C = x * v,
            o = x * w;
        this.set(C * v + z, C * w - y * t, C * t + y * w, 0, C * w + y * t, o * w + z, o * t - y * v, 0, C * t - y * w, o * t + y * v, x * t * t + z, 0, 0, 0, 0, 1);
        return this
    },
    setPosition: function (c) {
        this.n14 = c.x;
        this.n24 = c.y;
        this.n34 = c.z;
        return this
    },
    getPosition: function () {
        if (!this.position) {
            this.position = new THREE.Vector3
        }
        this.position.set(this.n14, this.n24, this.n34);
        return this.position
    },
    getColumnX: function () {
        if (!this.columnX) {
            this.columnX = new THREE.Vector3
        }
        this.columnX.set(this.n11, this.n21, this.n31);
        return this.columnX
    },
    getColumnY: function () {
        if (!this.columnY) {
            this.columnY = new THREE.Vector3
        }
        this.columnY.set(this.n12, this.n22, this.n32);
        return this.columnY
    },
    getColumnZ: function () {
        if (!this.columnZ) {
            this.columnZ = new THREE.Vector3
        }
        this.columnZ.set(this.n13, this.n23, this.n33);
        return this.columnZ
    },
    setRotationFromEuler: function (D, C) {
        var B = D.x,
            A = D.y,
            z = D.z,
            x = Math.cos(B),
            B = Math.sin(B),
            y = Math.cos(A),
            A = Math.sin(A),
            w = Math.cos(z),
            z = Math.sin(z);
        switch (C) {
            case "YXZ":
                var F = y * w,
                    o = y * z,
                    E = A * w,
                    G = A * z;
                this.n11 = F + G * B;
                this.n12 = E * B - o;
                this.n13 = x * A;
                this.n21 = x * z;
                this.n22 = x * w;
                this.n23 = -B;
                this.n31 = o * B - E;
                this.n32 = G + F * B;
                this.n33 = x * y;
                break;
            case "ZXY":
                F = y * w;
                o = y * z;
                E = A * w;
                G = A * z;
                this.n11 = F - G * B;
                this.n12 = -x * z;
                this.n13 = E + o * B;
                this.n21 = o + E * B;
                this.n22 = x * w;
                this.n23 = G - F * B;
                this.n31 = -x * A;
                this.n32 = B;
                this.n33 = x * y;
                break;
            case "ZYX":
                F = x * w;
                o = x * z;
                E = B * w;
                G = B * z;
                this.n11 = y * w;
                this.n12 = E * A - o;
                this.n13 = F * A + G;
                this.n21 = y * z;
                this.n22 = G * A + F;
                this.n23 = o * A - E;
                this.n31 = -A;
                this.n32 = B * y;
                this.n33 = x * y;
                break;
            case "YZX":
                F = x * y;
                o = x * A;
                E = B * y;
                G = B * A;
                this.n11 = y * w;
                this.n12 = G - F * z;
                this.n13 = E * z + o;
                this.n21 = z;
                this.n22 = x * w;
                this.n23 = -B * w;
                this.n31 = -A * w;
                this.n32 = o * z + E;
                this.n33 = F - G * z;
                break;
            case "XZY":
                F = x * y;
                o = x * A;
                E = B * y;
                G = B * A;
                this.n11 = y * w;
                this.n12 = -z;
                this.n13 = A * w;
                this.n21 = F * z + G;
                this.n22 = x * w;
                this.n23 = o * z - E;
                this.n31 = E * z - o;
                this.n32 = B * w;
                this.n33 = G * z + F;
                break;
            default:
                F = x * w, o = x * z, E = B * w, G = B * z, this.n11 = y * w, this.n12 = -y * z, this.n13 = A, this.n21 = o + E * A, this.n22 = F - G * A, this.n23 = -B * y, this.n31 = G - F * A, this.n32 = E + o * A, this.n33 = x * y
        }
        return this
    },
    setRotationFromQuaternion: function (B) {
        var A = B.x,
            z = B.y,
            y = B.z,
            x = B.w,
            v = A + A,
            w = z + z,
            t = y + y,
            B = A * v,
            C = A * w;
        A *= t;
        var o = z * w;
        z *= t;
        y *= t;
        v *= x;
        w *= x;
        x *= t;
        this.n11 = 1 - (o + y);
        this.n12 = C - x;
        this.n13 = A + w;
        this.n21 = C + x;
        this.n22 = 1 - (B + y);
        this.n23 = z - v;
        this.n31 = A - w;
        this.n32 = z + v;
        this.n33 = 1 - (B + o);
        return this
    },
    scale: function (f) {
        var k = f.x,
            h = f.y,
            f = f.z;
        this.n11 *= k;
        this.n12 *= h;
        this.n13 *= f;
        this.n21 *= k;
        this.n22 *= h;
        this.n23 *= f;
        this.n31 *= k;
        this.n32 *= h;
        this.n33 *= f;
        this.n41 *= k;
        this.n42 *= h;
        this.n43 *= f;
        return this
    },
    compose: function (k, p, o) {
        var n = THREE.Matrix4.__m1,
            m = THREE.Matrix4.__m2;
        n.identity();
        n.setRotationFromQuaternion(p);
        m.setScale(o.x, o.y, o.z);
        this.multiply(n, m);
        this.n14 = k.x;
        this.n24 = k.y;
        this.n34 = k.z;
        return this
    },
    decompose: function (n, u, t) {
        var p = THREE.Matrix4.__v1,
            o = THREE.Matrix4.__v2,
            k = THREE.Matrix4.__v3;
        p.set(this.n11, this.n21, this.n31);
        o.set(this.n12, this.n22, this.n32);
        k.set(this.n13, this.n23, this.n33);
        n = n instanceof THREE.Vector3 ? n : new THREE.Vector3;
        u = u instanceof THREE.Quaternion ? u : new THREE.Quaternion;
        t = t instanceof THREE.Vector3 ? t : new THREE.Vector3;
        t.x = p.length();
        t.y = o.length();
        t.z = k.length();
        n.x = this.n14;
        n.y = this.n24;
        n.z = this.n34;
        p = THREE.Matrix4.__m1;
        p.copy(this);
        p.n11 /= t.x;
        p.n21 /= t.x;
        p.n31 /= t.x;
        p.n12 /= t.y;
        p.n22 /= t.y;
        p.n32 /= t.y;
        p.n13 /= t.z;
        p.n23 /= t.z;
        p.n33 /= t.z;
        u.setFromRotationMatrix(p);
        return [n, u, t]
    },
    extractPosition: function (c) {
        this.n14 = c.n14;
        this.n24 = c.n24;
        this.n34 = c.n34
    },
    extractRotation: function (k, p) {
        var o = 1 / p.x,
            n = 1 / p.y,
            m = 1 / p.z;
        this.n11 = k.n11 * o;
        this.n21 = k.n21 * o;
        this.n31 = k.n31 * o;
        this.n12 = k.n12 * n;
        this.n22 = k.n22 * n;
        this.n32 = k.n32 * n;
        this.n13 = k.n13 * m;
        this.n23 = k.n23 * m;
        this.n33 = k.n33 * m
    }
};
THREE.Matrix4.makeInvert = function (S, R) {
    var Q = S.n11,
        P = S.n12,
        O = S.n13,
        M = S.n14,
        N = S.n21,
        L = S.n22,
        G = S.n23,
        K = S.n24,
        F = S.n31,
        H = S.n32,
        C = S.n33,
        E = S.n34,
        o = S.n41,
        A = S.n42,
        J = S.n43,
        I = S.n44;
    R === void 0 && (R = new THREE.Matrix4);
    R.n11 = G * E * A - K * C * A + K * H * J - L * E * J - G * H * I + L * C * I;
    R.n12 = M * C * A - O * E * A - M * H * J + P * E * J + O * H * I - P * C * I;
    R.n13 = O * K * A - M * G * A + M * L * J - P * K * J - O * L * I + P * G * I;
    R.n14 = M * G * H - O * K * H - M * L * C + P * K * C + O * L * E - P * G * E;
    R.n21 = K * C * o - G * E * o - K * F * J + N * E * J + G * F * I - N * C * I;
    R.n22 = O * E * o - M * C * o + M * F * J - Q * E * J - O * F * I + Q * C * I;
    R.n23 = M * G * o - O * K * o - M * N * J + Q * K * J + O * N * I - Q * G * I;
    R.n24 = O * K * F - M * G * F + M * N * C - Q * K * C - O * N * E + Q * G * E;
    R.n31 = L * E * o - K * H * o + K * F * A - N * E * A - L * F * I + N * H * I;
    R.n32 = M * H * o - P * E * o - M * F * A + Q * E * A + P * F * I - Q * H * I;
    R.n33 = O * K * o - M * L * o + M * N * A - Q * K * A - P * N * I + Q * L * I;
    R.n34 = M * L * F - P * K * F - M * N * H + Q * K * H + P * N * E - Q * L * E;
    R.n41 = G * H * o - L * C * o - G * F * A + N * C * A + L * F * J - N * H * J;
    R.n42 = P * C * o - O * H * o + O * F * A - Q * C * A - P * F * J + Q * H * J;
    R.n43 = O * L * o - P * G * o - O * N * A + Q * G * A + P * N * J - Q * L * J;
    R.n44 = P * G * F - O * L * F + O * N * H - Q * G * H - P * N * C + Q * L * C;
    R.multiplyScalar(1 / S.determinant());
    return R
};
THREE.Matrix4.makeInvert3x3 = function (D) {
    var C = D.m33,
        B = C.m,
        A = D.n33 * D.n22 - D.n32 * D.n23,
        z = -D.n33 * D.n21 + D.n31 * D.n23,
        x = D.n32 * D.n21 - D.n31 * D.n22,
        y = -D.n33 * D.n12 + D.n32 * D.n13,
        w = D.n33 * D.n11 - D.n31 * D.n13,
        F = -D.n32 * D.n11 + D.n31 * D.n12,
        o = D.n23 * D.n12 - D.n22 * D.n13,
        E = -D.n23 * D.n11 + D.n21 * D.n13,
        G = D.n22 * D.n11 - D.n21 * D.n12,
        D = D.n11 * A + D.n21 * y + D.n31 * o;
    D == 0 && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");
    D = 1 / D;
    B[0] = D * A;
    B[1] = D * z;
    B[2] = D * x;
    B[3] = D * y;
    B[4] = D * w;
    B[5] = D * F;
    B[6] = D * o;
    B[7] = D * E;
    B[8] = D * G;
    return C
};
THREE.Matrix4.makeFrustum = function (o, w, v, u, t, n) {
    var p;
    p = new THREE.Matrix4;
    p.n11 = 2 * t / (w - o);
    p.n12 = 0;
    p.n13 = (w + o) / (w - o);
    p.n14 = 0;
    p.n21 = 0;
    p.n22 = 2 * t / (u - v);
    p.n23 = (u + v) / (u - v);
    p.n24 = 0;
    p.n31 = 0;
    p.n32 = 0;
    p.n33 = -(n + t) / (n - t);
    p.n34 = -2 * n * t / (n - t);
    p.n41 = 0;
    p.n42 = 0;
    p.n43 = -1;
    p.n44 = 0;
    return p
};
THREE.Matrix4.makePerspective = function (k, p, o, n) {
    var m, k = o * Math.tan(k * Math.PI / 360);
    m = -k;
    return THREE.Matrix4.makeFrustum(m * p, k * p, m, k, o, n)
};
THREE.Matrix4.makeOrtho = function (B, A, z, y, x, v) {
    var w, t, C, o;
    w = new THREE.Matrix4;
    t = A - B;
    C = z - y;
    o = v - x;
    w.n11 = 2 / t;
    w.n12 = 0;
    w.n13 = 0;
    w.n14 = -((A + B) / t);
    w.n21 = 0;
    w.n22 = 2 / C;
    w.n23 = 0;
    w.n24 = -((z + y) / C);
    w.n31 = 0;
    w.n32 = 0;
    w.n33 = -2 / o;
    w.n34 = -((v + x) / o);
    w.n41 = 0;
    w.n42 = 0;
    w.n43 = 0;
    w.n44 = 1;
    return w
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Matrix4.__m1 = new THREE.Matrix4;
THREE.Matrix4.__m2 = new THREE.Matrix4;
THREE.Object3D = function () {
    this.id = THREE.Object3DCount++;
    this.name = "";
    this.parent = void 0;
    this.children = [];
    this.up = new THREE.Vector3(0, 1, 0);
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.eulerOrder = "XYZ";
    this.scale = new THREE.Vector3(1, 1, 1);
    this.flipSided = this.doubleSided = this.dynamic = !1;
    this.renderDepth = null;
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixRotationWorld = new THREE.Matrix4;
    this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
    this.quaternion = new THREE.Quaternion;
    this.useQuaternion = !1;
    this.boundRadius = 0;
    this.boundRadiusScale = 1;
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    translate: function (e, f) {
        this.matrix.rotateAxis(f);
        this.position.addSelf(f.multiplyScalar(e))
    },
    translateX: function (c) {
        this.translate(c, this._vector.set(1, 0, 0))
    },
    translateY: function (c) {
        this.translate(c, this._vector.set(0, 1, 0))
    },
    translateZ: function (c) {
        this.translate(c, this._vector.set(0, 0, 1))
    },
    lookAt: function (c) {
        this.matrix.lookAt(c, this.position, this.up);
        this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
    },
    addChild: function (e) {
        if (this.children.indexOf(e) === -1) {
            e.parent !== void 0 && e.parent.removeChild(e);
            e.parent = this;
            this.children.push(e);
            for (var f = this; f.parent !== void 0;) {
                f = f.parent
            }
            f !== void 0 && f instanceof THREE.Scene && f.addChildRecurse(e)
        }
    },
    removeChild: function (e) {
        var f = this.children.indexOf(e);
        if (f !== -1) {
            e.parent = void 0, this.children.splice(f, 1)
        }
    },
    getChildByName: function (k, p) {
        var o, n, m;
        o = 0;
        for (n = this.children.length; o < n; o++) {
            m = this.children[o];
            if (m.name === k) {
                return m
            }
            if (p && (m = m.getChildByName(k, p), m !== void 0)) {
                return m
            }
        }
    },
    updateMatrix: function () {
        this.matrix.setPosition(this.position);
        this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder);
        if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) {
            this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))
        }
        this.matrixWorldNeedsUpdate = !0
    },
    update: function (h, n, m) {
        this.matrixAutoUpdate && this.updateMatrix();
        if (this.matrixWorldNeedsUpdate || n) {
            h ? this.matrixWorld.multiply(h, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixRotationWorld.extractRotation(this.matrixWorld, this.scale), this.matrixWorldNeedsUpdate = !1, n = !0
        }
        for (var h = 0, k = this.children.length; h < k; h++) {
            this.children[h].update(this.matrixWorld, n, m)
        }
    }
};
THREE.Object3DCount = 0;
THREE.Projector = function () {
    function ao() {
        var c = aa[ah] = aa[ah] || new THREE.RenderableVertex;
        ah++;
        return c
    }
    function an(c, f) {
        return f.z - c.z
    }
    function am(t, x) {
        var z = 0,
            w = 1,
            u = t.z + t.w,
            v = x.z + x.w,
            p = -t.z + t.w,
            y = -x.z + x.w;
        return u >= 0 && v >= 0 && p >= 0 && y >= 0 ? !0 : u < 0 && v < 0 || p < 0 && y < 0 ? !1 : (u < 0 ? z = Math.max(z, u / (u - v)) : v < 0 && (w = Math.min(w, u / (u - v))), p < 0 ? z = Math.max(z, p / (p - y)) : y < 0 && (w = Math.min(w, p / (p - y))), w < z ? !1 : (t.lerpSelf(x, z), x.lerpSelf(t, 1 - w), !0))
    }
    var al, ak, ai = [],
        aj, ah, aa = [],
        ag, Y, ac = [],
        T, W = [],
        Q, R, af = [],
        ad, X, V = [],
        ab = [],
        J = [],
        Z = new THREE.Vector4,
        S = new THREE.Vector4,
        ae = new THREE.Matrix4,
        P = new THREE.Matrix4,
        o = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
        M = new THREE.Vector4,
        A = new THREE.Vector4;
    this.projectVector = function (c, f) {
        ae.multiply(f.projectionMatrix, f.matrixWorldInverse);
        ae.multiplyVector3(c);
        return c
    };
    this.unprojectVector = function (c, f) {
        ae.multiply(f.matrixWorld, THREE.Matrix4.makeInvert(f.projectionMatrix));
        ae.multiplyVector3(c);
        return c
    };
    this.projectObjects = function (x, m, h) {
        var f, B;
        ak = ab.length = 0;
        f = x.objects;
        x = 0;
        for (m = f.length; x < m; x++) {
            B = f[x];
            var y;
            if (!(y = !B.visible)) {
                if (y = B instanceof THREE.Mesh) {
                    if (y = B.frustumCulled) {
                        a: {
                            y = void 0;
                            for (var C = B.matrixWorld, c = -B.geometry.boundingSphere.radius * Math.max(B.scale.x, Math.max(B.scale.y, B.scale.z)), z = 0; z < 6; z++) {
                                if (y = o[z].x * C.n14 + o[z].y * C.n24 + o[z].z * C.n34 + o[z].w, y <= c) {
                                    y = !1;
                                    break a
                                }
                            }
                            y = !0
                        }
                        y = !y
                    }
                }
            }
            if (!y) {
                y = ai[ak] = ai[ak] || new THREE.RenderableObject, ak++, al = y, Z.copy(B.position), ae.multiplyVector3(Z), al.object = B, al.z = Z.z, ab.push(al)
            }
        }
        h && ab.sort(an);
        return ab
    };
    this.projectScene = function (I, H, C) {
        var y = H.near,
            x = H.far,
            u, D, K, c, B, N, L, t, z, n, b, v, w, p, e, k, G;
        X = R = T = Y = J.length = 0;
        H.matrixAutoUpdate && H.update(void 0, !0);
        I.update(void 0, !1, H);
        ae.multiply(H.projectionMatrix, H.matrixWorldInverse);
        o[0].set(ae.n41 - ae.n11, ae.n42 - ae.n12, ae.n43 - ae.n13, ae.n44 - ae.n14);
        o[1].set(ae.n41 + ae.n11, ae.n42 + ae.n12, ae.n43 + ae.n13, ae.n44 + ae.n14);
        o[2].set(ae.n41 + ae.n21, ae.n42 + ae.n22, ae.n43 + ae.n23, ae.n44 + ae.n24);
        o[3].set(ae.n41 - ae.n21, ae.n42 - ae.n22, ae.n43 - ae.n23, ae.n44 - ae.n24);
        o[4].set(ae.n41 - ae.n31, ae.n42 - ae.n32, ae.n43 - ae.n33, ae.n44 - ae.n34);
        o[5].set(ae.n41 + ae.n31, ae.n42 + ae.n32, ae.n43 + ae.n33, ae.n44 + ae.n34);
        for (u = 0; u < 6; u++) {
            z = o[u], z.divideScalar(Math.sqrt(z.x * z.x + z.y * z.y + z.z * z.z))
        }
        z = this.projectObjects(I, H, !0);
        I = 0;
        for (u = z.length; I < u; I++) {
            if (n = z[I].object, n.visible) {
                if (b = n.matrixWorld, v = n.matrixRotationWorld, w = n.materials, p = n.overdraw, ah = 0, n instanceof THREE.Mesh) {
                    e = n.geometry;
                    c = e.vertices;
                    k = e.faces;
                    e = e.faceVertexUvs;
                    D = 0;
                    for (K = c.length; D < K; D++) {
                        aj = ao(), aj.positionWorld.copy(c[D].position), b.multiplyVector3(aj.positionWorld), aj.positionScreen.copy(aj.positionWorld), ae.multiplyVector4(aj.positionScreen), aj.positionScreen.x /= aj.positionScreen.w, aj.positionScreen.y /= aj.positionScreen.w, aj.visible = aj.positionScreen.z > y && aj.positionScreen.z < x
                    }
                    c = 0;
                    for (D = k.length; c < D; c++) {
                        K = k[c];
                        if (K instanceof THREE.Face3) {
                            if (B = aa[K.a], N = aa[K.b], L = aa[K.c], B.visible && N.visible && L.visible && (n.doubleSided || n.flipSided != (L.positionScreen.x - B.positionScreen.x) * (N.positionScreen.y - B.positionScreen.y) - (L.positionScreen.y - B.positionScreen.y) * (N.positionScreen.x - B.positionScreen.x) < 0)) {
                                t = ac[Y] = ac[Y] || new THREE.RenderableFace3, Y++, ag = t, ag.v1.copy(B), ag.v2.copy(N), ag.v3.copy(L)
                            } else {
                                continue
                            }
                        } else {
                            if (K instanceof THREE.Face4) {
                                if (B = aa[K.a], N = aa[K.b], L = aa[K.c], t = aa[K.d], B.visible && N.visible && L.visible && t.visible && (n.doubleSided || n.flipSided != ((t.positionScreen.x - B.positionScreen.x) * (N.positionScreen.y - B.positionScreen.y) - (t.positionScreen.y - B.positionScreen.y) * (N.positionScreen.x - B.positionScreen.x) < 0 || (N.positionScreen.x - L.positionScreen.x) * (t.positionScreen.y - L.positionScreen.y) - (N.positionScreen.y - L.positionScreen.y) * (t.positionScreen.x - L.positionScreen.x) < 0))) {
                                    G = W[T] = W[T] || new THREE.RenderableFace4, T++, ag = G, ag.v1.copy(B), ag.v2.copy(N), ag.v3.copy(L), ag.v4.copy(t)
                                } else {
                                    continue
                                }
                            }
                        }
                        ag.normalWorld.copy(K.normal);
                        v.multiplyVector3(ag.normalWorld);
                        ag.centroidWorld.copy(K.centroid);
                        b.multiplyVector3(ag.centroidWorld);
                        ag.centroidScreen.copy(ag.centroidWorld);
                        ae.multiplyVector3(ag.centroidScreen);
                        L = K.vertexNormals;
                        B = 0;
                        for (N = L.length; B < N; B++) {
                            t = ag.vertexNormalsWorld[B], t.copy(L[B]), v.multiplyVector3(t)
                        }
                        B = 0;
                        for (N = e.length; B < N; B++) {
                            if (G = e[B][c]) {
                                L = 0;
                                for (t = G.length; L < t; L++) {
                                    ag.uvs[B][L] = G[L]
                                }
                            }
                        }
                        ag.meshMaterials = w;
                        ag.faceMaterials = K.materials;
                        ag.overdraw = p;
                        ag.z = ag.centroidScreen.z;
                        J.push(ag)
                    }
                } else {
                    if (n instanceof THREE.Line) {
                        P.multiply(ae, b);
                        c = n.geometry.vertices;
                        B = ao();
                        B.positionScreen.copy(c[0].position);
                        P.multiplyVector4(B.positionScreen);
                        D = 1;
                        for (K = c.length; D < K; D++) {
                            if (B = ao(), B.positionScreen.copy(c[D].position), P.multiplyVector4(B.positionScreen), N = aa[ah - 2], M.copy(B.positionScreen), A.copy(N.positionScreen), am(M, A)) {
                                M.multiplyScalar(1 / M.w), A.multiplyScalar(1 / A.w), b = af[R] = af[R] || new THREE.RenderableLine, R++, Q = b, Q.v1.positionScreen.copy(M), Q.v2.positionScreen.copy(A), Q.z = Math.max(M.z, A.z), Q.materials = n.materials, J.push(Q)
                            }
                        }
                    } else {
                        if (n instanceof THREE.Particle && (S.set(n.matrixWorld.n14, n.matrixWorld.n24, n.matrixWorld.n34, 1), ae.multiplyVector4(S), S.z /= S.w, S.z > 0 && S.z < 1)) {
                            b = V[X] = V[X] || new THREE.RenderableParticle, X++, ad = b, ad.x = S.x / S.w, ad.y = S.y / S.w, ad.z = S.z, ad.rotation = n.rotation.z, ad.scale.x = n.scale.x * Math.abs(ad.x - (S.x + H.projectionMatrix.n11) / (S.w + H.projectionMatrix.n14)), ad.scale.y = n.scale.y * Math.abs(ad.y - (S.y + H.projectionMatrix.n22) / (S.w + H.projectionMatrix.n24)), ad.materials = n.materials, J.push(ad)
                        }
                    }
                }
            }
        }
        C && J.sort(an);
        return J
    }
};
THREE.Quaternion = function (h, n, m, k) {
    this.set(h || 0, n || 0, m || 0, k !== void 0 ? k : 1)
};
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    set: function (h, n, m, k) {
        this.x = h;
        this.y = n;
        this.z = m;
        this.w = k;
        return this
    },
    copy: function (c) {
        this.x = c.x;
        this.y = c.y;
        this.z = c.z;
        this.w = c.w;
        return this
    },
    setFromEuler: function (p) {
        var y = 0.5 * Math.PI / 360,
            w = p.x * y,
            v = p.y * y,
            u = p.z * y,
            p = Math.cos(v),
            v = Math.sin(v),
            y = Math.cos(-u),
            u = Math.sin(-u),
            o = Math.cos(w),
            w = Math.sin(w),
            t = p * y,
            x = v * u;
        this.w = t * o - x * w;
        this.x = t * w + x * o;
        this.y = v * y * o + p * u * w;
        this.z = p * u * o - v * y * w;
        return this
    },
    setFromAxisAngle: function (h, n) {
        var m = n / 2,
            k = Math.sin(m);
        this.x = h.x * k;
        this.y = h.y * k;
        this.z = h.z * k;
        this.w = Math.cos(m);
        return this
    },
    setFromRotationMatrix: function (e) {
        var f = Math.pow(e.determinant(), 1 / 3);
        this.w = Math.sqrt(Math.max(0, f + e.n11 + e.n22 + e.n33)) / 2;
        this.x = Math.sqrt(Math.max(0, f + e.n11 - e.n22 - e.n33)) / 2;
        this.y = Math.sqrt(Math.max(0, f - e.n11 + e.n22 - e.n33)) / 2;
        this.z = Math.sqrt(Math.max(0, f - e.n11 - e.n22 + e.n33)) / 2;
        this.x = e.n32 - e.n23 < 0 ? -Math.abs(this.x) : Math.abs(this.x);
        this.y = e.n13 - e.n31 < 0 ? -Math.abs(this.y) : Math.abs(this.y);
        this.z = e.n21 - e.n12 < 0 ? -Math.abs(this.z) : Math.abs(this.z);
        this.normalize();
        return this
    },
    calculateW: function () {
        this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
        return this
    },
    inverse: function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this
    },
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    normalize: function () {
        var c = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        c == 0 ? this.w = this.z = this.y = this.x = 0 : (c = 1 / c, this.x *= c, this.y *= c, this.z *= c, this.w *= c);
        return this
    },
    multiplySelf: function (p) {
        var y = this.x,
            w = this.y,
            v = this.z,
            u = this.w,
            o = p.x,
            t = p.y,
            x = p.z,
            p = p.w;
        this.x = y * p + u * o + w * x - v * t;
        this.y = w * p + u * t + v * o - y * x;
        this.z = v * p + u * x + y * t - w * o;
        this.w = u * p - y * o - w * t - v * x;
        return this
    },
    multiply: function (e, f) {
        this.x = e.x * f.w + e.y * f.z - e.z * f.y + e.w * f.x;
        this.y = -e.x * f.z + e.y * f.w + e.z * f.x + e.w * f.y;
        this.z = e.x * f.y - e.y * f.x + e.z * f.w + e.w * f.z;
        this.w = -e.x * f.x - e.y * f.y - e.z * f.z + e.w * f.w;
        return this
    },
    multiplyVector3: function (D, C) {
        C || (C = D);
        var B = D.x,
            A = D.y,
            z = D.z,
            x = this.x,
            y = this.y,
            w = this.z,
            F = this.w,
            o = F * B + y * z - w * A,
            E = F * A + w * B - x * z,
            G = F * z + x * A - y * B,
            B = -x * B - y * A - w * z;
        C.x = o * F + B * -x + E * -w - G * -y;
        C.y = E * F + B * -y + G * -x - o * -w;
        C.z = G * F + B * -w + o * -y - E * -x;
        return C
    }
};
THREE.Quaternion.slerp = function (o, w, v, u) {
    var t = o.w * w.w + o.x * w.x + o.y * w.y + o.z * w.z;
    if (Math.abs(t) >= 1) {
        return v.w = o.w, v.x = o.x, v.y = o.y, v.z = o.z, v
    }
    var n = Math.acos(t),
        p = Math.sqrt(1 - t * t);
    if (Math.abs(p) < 0.001) {
        return v.w = 0.5 * (o.w + w.w), v.x = 0.5 * (o.x + w.x), v.y = 0.5 * (o.y + w.y), v.z = 0.5 * (o.z + w.z), v
    }
    t = Math.sin((1 - u) * n) / p;
    u = Math.sin(u * n) / p;
    v.w = o.w * t + w.w * u;
    v.x = o.x * t + w.x * u;
    v.y = o.y * t + w.y * u;
    v.z = o.z * t + w.z * u;
    return v
};
THREE.Vertex = function (c) {
    this.position = c || new THREE.Vector3
};
THREE.Face3 = function (n, u, t, p, o, k) {
    this.a = n;
    this.b = u;
    this.c = t;
    this.normal = p instanceof THREE.Vector3 ? p : new THREE.Vector3;
    this.vertexNormals = p instanceof Array ? p : [];
    this.color = o instanceof THREE.Color ? o : new THREE.Color;
    this.vertexColors = o instanceof Array ? o : [];
    this.vertexTangents = [];
    this.materials = k instanceof Array ? k : [k];
    this.centroid = new THREE.Vector3
};
THREE.Face4 = function (o, w, v, u, t, n, p) {
    this.a = o;
    this.b = w;
    this.c = v;
    this.d = u;
    this.normal = t instanceof THREE.Vector3 ? t : new THREE.Vector3;
    this.vertexNormals = t instanceof Array ? t : [];
    this.color = n instanceof THREE.Color ? n : new THREE.Color;
    this.vertexColors = n instanceof Array ? n : [];
    this.vertexTangents = [];
    this.materials = p instanceof Array ? p : [p];
    this.centroid = new THREE.Vector3
};
THREE.UV = function (e, f) {
    this.u = e || 0;
    this.v = f || 0
};
THREE.UV.prototype = {
    constructor: THREE.UV,
    set: function (e, f) {
        this.u = e;
        this.v = f;
        return this
    },
    copy: function (c) {
        this.u = c.u;
        this.v = c.v;
        return this
    },
    clone: function () {
        return new THREE.UV(this.u, this.v)
    }
};
THREE.Geometry = function () {
    this.id = THREE.GeometryCount++;
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.edges = [];
    this.faceUvs = [
        []
    ];
    this.faceVertexUvs = [
        []
    ];
    this.morphTargets = [];
    this.morphColors = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.dynamic = this.hasTangents = !1
};
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    computeCentroids: function () {
        var f, k, h;
        f = 0;
        for (k = this.faces.length; f < k; f++) {
            h = this.faces[f], h.centroid.set(0, 0, 0), h instanceof THREE.Face3 ? (h.centroid.addSelf(this.vertices[h.a].position), h.centroid.addSelf(this.vertices[h.b].position), h.centroid.addSelf(this.vertices[h.c].position), h.centroid.divideScalar(3)) : h instanceof THREE.Face4 && (h.centroid.addSelf(this.vertices[h.a].position), h.centroid.addSelf(this.vertices[h.b].position), h.centroid.addSelf(this.vertices[h.c].position), h.centroid.addSelf(this.vertices[h.d].position), h.centroid.divideScalar(4))
        }
    },
    computeFaceNormals: function (z) {
        var y, x, w, v, p, t, o = new THREE.Vector3,
            A = new THREE.Vector3;
        w = 0;
        for (v = this.faces.length; w < v; w++) {
            p = this.faces[w];
            if (z && p.vertexNormals.length) {
                o.set(0, 0, 0);
                y = 0;
                for (x = p.vertexNormals.length; y < x; y++) {
                    o.addSelf(p.vertexNormals[y])
                }
                o.divideScalar(3)
            } else {
                y = this.vertices[p.a], x = this.vertices[p.b], t = this.vertices[p.c], o.sub(t.position, x.position), A.sub(y.position, x.position), o.crossSelf(A)
            }
            o.isZero() || o.normalize();
            p.normal.copy(o)
        }
    },
    computeVertexNormals: function () {
        var h, n, m, k;
        if (this.__tmpVertices == void 0) {
            k = this.__tmpVertices = Array(this.vertices.length);
            h = 0;
            for (n = this.vertices.length; h < n; h++) {
                k[h] = new THREE.Vector3
            }
            h = 0;
            for (n = this.faces.length; h < n; h++) {
                if (m = this.faces[h], m instanceof THREE.Face3) {
                    m.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
                } else {
                    if (m instanceof THREE.Face4) {
                        m.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
                    }
                }
            }
        } else {
            k = this.__tmpVertices;
            h = 0;
            for (n = this.vertices.length; h < n; h++) {
                k[h].set(0, 0, 0)
            }
        }
        h = 0;
        for (n = this.faces.length; h < n; h++) {
            m = this.faces[h], m instanceof THREE.Face3 ? (k[m.a].addSelf(m.normal), k[m.b].addSelf(m.normal), k[m.c].addSelf(m.normal)) : m instanceof THREE.Face4 && (k[m.a].addSelf(m.normal), k[m.b].addSelf(m.normal), k[m.c].addSelf(m.normal), k[m.d].addSelf(m.normal))
        }
        h = 0;
        for (n = this.vertices.length; h < n; h++) {
            k[h].normalize()
        }
        h = 0;
        for (n = this.faces.length; h < n; h++) {
            m = this.faces[h], m instanceof THREE.Face3 ? (m.vertexNormals[0].copy(k[m.a]), m.vertexNormals[1].copy(k[m.b]), m.vertexNormals[2].copy(k[m.c])) : m instanceof THREE.Face4 && (m.vertexNormals[0].copy(k[m.a]), m.vertexNormals[1].copy(k[m.b]), m.vertexNormals[2].copy(k[m.c]), m.vertexNormals[3].copy(k[m.d]))
        }
    },
    computeTangents: function () {
        function ax(n, u, w, t, p, k, v) {
            ap = n.vertices[u].position;
            ah = n.vertices[w].position;
            an = n.vertices[t].position;
            af = ar[p];
            aj = ar[k];
            ab = ar[v];
            ad = ah.x - ap.x;
            Y = an.x - ap.x;
            Z = ah.y - ap.y;
            am = an.y - ap.y;
            ak = ah.z - ap.z;
            ae = an.z - ap.z;
            ac = aj.u - af.u;
            ai = ab.u - af.u;
            T = aj.v - af.v;
            ag = ab.v - af.v;
            aa = 1 / (ac * ag - ai * T);
            V.set((ag * ad - T * Y) * aa, (ag * Z - T * am) * aa, (ag * ak - T * ae) * aa);
            R.set((ac * Y - ai * ad) * aa, (ac * am - ai * Z) * aa, (ac * ae - ai * ak) * aa);
            X[u].addSelf(V);
            X[w].addSelf(V);
            X[t].addSelf(V);
            J[u].addSelf(R);
            J[w].addSelf(R);
            J[t].addSelf(R)
        }
        var aw, av, au, at, aq, ar, ap, ah, an, af, aj, ab, ad, Y, Z, am, ak, ae, ac, ai, T, ag, aa, al, X = [],
            J = [],
            V = new THREE.Vector3,
            R = new THREE.Vector3,
            M = new THREE.Vector3,
            Q = new THREE.Vector3,
            ao = new THREE.Vector3;
        aw = 0;
        for (av = this.vertices.length; aw < av; aw++) {
            X[aw] = new THREE.Vector3, J[aw] = new THREE.Vector3
        }
        aw = 0;
        for (av = this.faces.length; aw < av; aw++) {
            aq = this.faces[aw], ar = this.faceVertexUvs[0][aw], aq instanceof THREE.Face3 ? ax(this, aq.a, aq.b, aq.c, 0, 1, 2) : aq instanceof THREE.Face4 && (ax(this, aq.a, aq.b, aq.c, 0, 1, 2), ax(this, aq.a, aq.b, aq.d, 0, 1, 3))
        }
        var A = ["a", "b", "c", "d"];
        aw = 0;
        for (av = this.faces.length; aw < av; aw++) {
            aq = this.faces[aw];
            for (au = 0; au < aq.vertexNormals.length; au++) {
                ao.copy(aq.vertexNormals[au]), at = aq[A[au]], al = X[at], M.copy(al), M.subSelf(ao.multiplyScalar(ao.dot(al))).normalize(), Q.cross(aq.vertexNormals[au], al), at = Q.dot(J[at]), at = at < 0 ? -1 : 1, aq.vertexTangents[au] = new THREE.Vector4(M.x, M.y, M.z, at)
            }
        }
        this.hasTangents = !0
    },
    computeBoundingBox: function () {
        var f;
        if (this.vertices.length > 0) {
            this.boundingBox = {
                x: [this.vertices[0].position.x, this.vertices[0].position.x],
                y: [this.vertices[0].position.y, this.vertices[0].position.y],
                z: [this.vertices[0].position.z, this.vertices[0].position.z]
            };
            for (var k = 1, h = this.vertices.length; k < h; k++) {
                f = this.vertices[k];
                if (f.position.x < this.boundingBox.x[0]) {
                    this.boundingBox.x[0] = f.position.x
                } else {
                    if (f.position.x > this.boundingBox.x[1]) {
                        this.boundingBox.x[1] = f.position.x
                    }
                }
                if (f.position.y < this.boundingBox.y[0]) {
                    this.boundingBox.y[0] = f.position.y
                } else {
                    if (f.position.y > this.boundingBox.y[1]) {
                        this.boundingBox.y[1] = f.position.y
                    }
                }
                if (f.position.z < this.boundingBox.z[0]) {
                    this.boundingBox.z[0] = f.position.z
                } else {
                    if (f.position.z > this.boundingBox.z[1]) {
                        this.boundingBox.z[1] = f.position.z
                    }
                }
            }
        }
    },
    computeBoundingSphere: function () {
        for (var f = 0, k = 0, h = this.vertices.length; k < h; k++) {
            f = Math.max(f, this.vertices[k].position.length())
        }
        this.boundingSphere = {
            radius: f
        }
    },
    computeEdgeFaces: function () {
        function p(c, f) {
            return Math.min(c, f) + "_" + Math.max(c, f)
        }
        function y(f, h, k) {
            f[h] === void 0 ? (f[h] = {
                set: {},
                array: []
            }, f[h].set[k] = 1, f[h].array.push(k)) : f[h].set[k] === void 0 && (f[h].set[k] = 1, f[h].array.push(k))
        }
        var w, v, u, o, t, x = {};
        w = 0;
        for (v = this.faces.length; w < v; w++) {
            t = this.faces[w], t instanceof THREE.Face3 ? (u = p(t.a, t.b), y(x, u, w), u = p(t.b, t.c), y(x, u, w), u = p(t.a, t.c), y(x, u, w)) : t instanceof THREE.Face4 && (u = p(t.b, t.d), y(x, u, w), u = p(t.a, t.b), y(x, u, w), u = p(t.a, t.d), y(x, u, w), u = p(t.b, t.c), y(x, u, w), u = p(t.c, t.d), y(x, u, w))
        }
        w = 0;
        for (v = this.edges.length; w < v; w++) {
            t = this.edges[w];
            u = t.vertexIndices[0];
            o = t.vertexIndices[1];
            t.faceIndices = x[p(u, o)].array;
            for (u = 0; u < t.faceIndices.length; u++) {
                o = t.faceIndices[u], t.faces.push(this.faces[o])
            }
        }
    }
};
THREE.GeometryCount = 0;
THREE.Spline = function (E) {
    function D(p, x, J, v, t, u, n) {
        p = (J - p) * 0.5;
        v = (v - x) * 0.5;
        return (2 * (x - J) + p + v) * n + (-3 * (x - J) - 2 * p - v) * u + p * t + x
    }
    this.points = E;
    var C = [],
        B = {
            x: 0,
            y: 0,
            z: 0
        }, A, y, z, w, H, o, G, I, F;
    this.initFromArray = function (c) {
        this.points = [];
        for (var f = 0; f < c.length; f++) {
            this.points[f] = {
                x: c[f][0],
                y: c[f][1],
                z: c[f][2]
            }
        }
    };
    this.getPoint = function (c) {
        A = (this.points.length - 1) * c;
        y = Math.floor(A);
        z = A - y;
        C[0] = y == 0 ? y : y - 1;
        C[1] = y;
        C[2] = y > this.points.length - 2 ? y : y + 1;
        C[3] = y > this.points.length - 3 ? y : y + 2;
        o = this.points[C[0]];
        G = this.points[C[1]];
        I = this.points[C[2]];
        F = this.points[C[3]];
        w = z * z;
        H = z * w;
        B.x = D(o.x, G.x, I.x, F.x, z, w, H);
        B.y = D(o.y, G.y, I.y, F.y, z, w, H);
        B.z = D(o.z, G.z, I.z, F.z, z, w, H);
        return B
    };
    this.getControlPointsArray = function () {
        var h, m, n = this.points.length,
            k = [];
        for (h = 0; h < n; h++) {
            m = this.points[h], k[h] = [m.x, m.y, m.z]
        }
        return k
    };
    this.getLength = function (t) {
        var J, L, x = J = J = 0,
            u = new THREE.Vector3,
            v = new THREE.Vector3,
            p = [],
            K = 0;
        p[0] = 0;
        t || (t = 100);
        L = this.points.length * t;
        u.copy(this.points[0]);
        for (t = 1; t < L; t++) {
            J = t / L, position = this.getPoint(J), v.copy(position), K += v.distanceTo(u), u.copy(position), J *= this.points.length - 1, J = Math.floor(J), J != x && (p[J] = K, x = J)
        }
        p[p.length] = K;
        return {
            chunks: p,
            total: K
        }
    };
    this.reparametrizeByArcLength = function (N) {
        var L, M, K, x, J, v, p = [],
            O = new THREE.Vector3,
            P = this.getLength();
        p.push(O.copy(this.points[0]).clone());
        for (L = 1; L < this.points.length; L++) {
            M = P.chunks[L] - P.chunks[L - 1];
            v = Math.ceil(N * M / P.total);
            x = (L - 1) / (this.points.length - 1);
            J = L / (this.points.length - 1);
            for (M = 1; M < v - 1; M++) {
                K = x + M * (1 / v) * (J - x), position = this.getPoint(K), p.push(O.copy(position).clone())
            }
            p.push(O.copy(this.points[L]).clone())
        }
        this.points = p
    }
};
THREE.Edge = function (h, n, m, k) {
    this.vertices = [h, n];
    this.vertexIndices = [m, k];
    this.faces = [];
    this.faceIndices = []
};
THREE.Camera = function (k, p, o, n, m) {
    THREE.Object3D.call(this);
    this.fov = k || 50;
    this.aspect = p || 1;
    this.near = o || 0.1;
    this.far = n || 2000;
    this.target = m || new THREE.Object3D;
    this.useTarget = !0;
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = null;
    this.updateProjectionMatrix()
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.supr = THREE.Object3D.prototype;
THREE.Camera.prototype.translate = function (e, f) {
    this.matrix.rotateAxis(f);
    f.multiplyScalar(e);
    this.position.addSelf(f);
    this.target.position.addSelf(f)
};
THREE.Camera.prototype.updateProjectionMatrix = function () {
    if (this.fullWidth) {
        var h = this.fullWidth / this.fullHeight,
            n = Math.tan(this.fov * Math.PI / 360) * this.near,
            m = -n,
            k = h * m,
            h = Math.abs(h * n - k),
            m = Math.abs(n - m);
        this.projectionMatrix = THREE.Matrix4.makeFrustum(k + this.x * h / this.fullWidth, k + (this.x + this.width) * h / this.fullWidth, n - (this.y + this.height) * m / this.fullHeight, n - this.y * m / this.fullHeight, this.near, this.far)
    } else {
        this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
    }
};
THREE.Camera.prototype.setViewOffset = function (n, u, t, p, o, k) {
    this.fullWidth = n;
    this.fullHeight = u;
    this.x = t;
    this.y = p;
    this.width = o;
    this.height = k;
    this.updateProjectionMatrix()
};
THREE.Camera.prototype.update = function (f, k, h) {
    if (this.useTarget) {
        this.matrix.lookAt(this.position, this.target.position, this.up), this.matrix.setPosition(this.position), f ? this.matrixWorld.multiply(f, this.matrix) : this.matrixWorld.copy(this.matrix), THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse), k = !0
    } else {
        if (this.matrixAutoUpdate && this.updateMatrix(), k || this.matrixWorldNeedsUpdate) {
            f ? this.matrixWorld.multiply(f, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, k = !0, THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse)
        }
    }
    for (f = 0; f < this.children.length; f++) {
        this.children[f].update(this.matrixWorld, k, h)
    }
};
THREE.OrthoCamera = function (o, w, v, u, t, n, p) {
    THREE.Camera.call(this, 45, 1, t, n, p);
    this.left = o;
    this.right = w;
    this.top = v;
    this.bottom = u;
    this.updateProjectionMatrix()
};
THREE.OrthoCamera.prototype = new THREE.Camera;
THREE.OrthoCamera.prototype.constructor = THREE.OrthoCamera;
THREE.OrthoCamera.prototype.updateProjectionMatrix = function () {
    this.projectionMatrix = THREE.Matrix4.makeOrtho(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.Light = function (c) {
    THREE.Object3D.call(this);
    this.color = new THREE.Color(c)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function (c) {
    THREE.Light.call(this, c)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function (h, n, m, k) {
    THREE.Light.call(this, h);
    this.position = new THREE.Vector3(0, 1, 0);
    this.intensity = n || 1;
    this.distance = m || 0;
    this.castShadow = k !== void 0 ? k : !1
};
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function (f, k, h) {
    THREE.Light.call(this, f);
    this.position = new THREE.Vector3;
    this.intensity = k || 1;
    this.distance = h || 0
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.SpotLight = function (h, n, m, k) {
    THREE.Light.call(this, h);
    this.position = new THREE.Vector3(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = n || 1;
    this.distance = m || 0;
    this.castShadow = k !== void 0 ? k : !1
};
THREE.SpotLight.prototype = new THREE.Light;
THREE.SpotLight.prototype.constructor = THREE.SpotLight;
THREE.Material = function (c) {
    this.id = THREE.MaterialCount++;
    c = c || {};
    this.opacity = c.opacity !== void 0 ? c.opacity : 1;
    this.transparent = c.transparent !== void 0 ? c.transparent : !1;
    this.blending = c.blending !== void 0 ? c.blending : THREE.NormalBlending;
    this.depthTest = c.depthTest !== void 0 ? c.depthTest : !0;
    this.polygonOffset = c.polygonOffset !== void 0 ? c.polygonOffset : !1;
    this.polygonOffsetFactor = c.polygonOffsetFactor !== void 0 ? c.polygonOffsetFactor : 0;
    this.polygonOffsetUnits = c.polygonOffsetUnits !== void 0 ? c.polygonOffsetUnits : 0;
    this.alphaTest = c.alphaTest !== void 0 ? c.alphaTest : 0
};
THREE.MaterialCount = 0;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.LineBasicMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.color = c.color !== void 0 ? new THREE.Color(c.color) : new THREE.Color(16777215);
    this.linewidth = c.linewidth !== void 0 ? c.linewidth : 1;
    this.linecap = c.linecap !== void 0 ? c.linecap : "round";
    this.linejoin = c.linejoin !== void 0 ? c.linejoin : "round";
    this.vertexColors = c.vertexColors ? c.vertexColors : !1
};
THREE.LineBasicMaterial.prototype = new THREE.Material;
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.color = c.color !== void 0 ? new THREE.Color(c.color) : new THREE.Color(16777215);
    this.map = c.map !== void 0 ? c.map : null;
    this.lightMap = c.lightMap !== void 0 ? c.lightMap : null;
    this.envMap = c.envMap !== void 0 ? c.envMap : null;
    this.combine = c.combine !== void 0 ? c.combine : THREE.MultiplyOperation;
    this.reflectivity = c.reflectivity !== void 0 ? c.reflectivity : 1;
    this.refractionRatio = c.refractionRatio !== void 0 ? c.refractionRatio : 0.98;
    this.shading = c.shading !== void 0 ? c.shading : THREE.SmoothShading;
    this.wireframe = c.wireframe !== void 0 ? c.wireframe : !1;
    this.wireframeLinewidth = c.wireframeLinewidth !== void 0 ? c.wireframeLinewidth : 1;
    this.wireframeLinecap = c.wireframeLinecap !== void 0 ? c.wireframeLinecap : "round";
    this.wireframeLinejoin = c.wireframeLinejoin !== void 0 ? c.wireframeLinejoin : "round";
    this.vertexColors = c.vertexColors !== void 0 ? c.vertexColors : !1;
    this.skinning = c.skinning !== void 0 ? c.skinning : !1;
    this.morphTargets = c.morphTargets !== void 0 ? c.morphTargets : !1
};
THREE.MeshBasicMaterial.prototype = new THREE.Material;
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.color = c.color !== void 0 ? new THREE.Color(c.color) : new THREE.Color(16777215);
    this.map = c.map !== void 0 ? c.map : null;
    this.lightMap = c.lightMap !== void 0 ? c.lightMap : null;
    this.envMap = c.envMap !== void 0 ? c.envMap : null;
    this.combine = c.combine !== void 0 ? c.combine : THREE.MultiplyOperation;
    this.reflectivity = c.reflectivity !== void 0 ? c.reflectivity : 1;
    this.refractionRatio = c.refractionRatio !== void 0 ? c.refractionRatio : 0.98;
    this.shading = c.shading !== void 0 ? c.shading : THREE.SmoothShading;
    this.wireframe = c.wireframe !== void 0 ? c.wireframe : !1;
    this.wireframeLinewidth = c.wireframeLinewidth !== void 0 ? c.wireframeLinewidth : 1;
    this.wireframeLinecap = c.wireframeLinecap !== void 0 ? c.wireframeLinecap : "round";
    this.wireframeLinejoin = c.wireframeLinejoin !== void 0 ? c.wireframeLinejoin : "round";
    this.vertexColors = c.vertexColors !== void 0 ? c.vertexColors : !1;
    this.skinning = c.skinning !== void 0 ? c.skinning : !1;
    this.morphTargets = c.morphTargets !== void 0 ? c.morphTargets : !1
};
THREE.MeshLambertMaterial.prototype = new THREE.Material;
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.color = c.color !== void 0 ? new THREE.Color(c.color) : new THREE.Color(16777215);
    this.ambient = c.ambient !== void 0 ? new THREE.Color(c.ambient) : new THREE.Color(328965);
    this.specular = c.specular !== void 0 ? new THREE.Color(c.specular) : new THREE.Color(1118481);
    this.shininess = c.shininess !== void 0 ? c.shininess : 30;
    this.map = c.map !== void 0 ? c.map : null;
    this.lightMap = c.lightMap !== void 0 ? c.lightMap : null;
    this.envMap = c.envMap !== void 0 ? c.envMap : null;
    this.combine = c.combine !== void 0 ? c.combine : THREE.MultiplyOperation;
    this.reflectivity = c.reflectivity !== void 0 ? c.reflectivity : 1;
    this.refractionRatio = c.refractionRatio !== void 0 ? c.refractionRatio : 0.98;
    this.shading = c.shading !== void 0 ? c.shading : THREE.SmoothShading;
    this.wireframe = c.wireframe !== void 0 ? c.wireframe : !1;
    this.wireframeLinewidth = c.wireframeLinewidth !== void 0 ? c.wireframeLinewidth : 1;
    this.wireframeLinecap = c.wireframeLinecap !== void 0 ? c.wireframeLinecap : "round";
    this.wireframeLinejoin = c.wireframeLinejoin !== void 0 ? c.wireframeLinejoin : "round";
    this.vertexColors = c.vertexColors !== void 0 ? c.vertexColors : !1;
    this.skinning = c.skinning !== void 0 ? c.skinning : !1;
    this.morphTargets = c.morphTargets !== void 0 ? c.morphTargets : !1
};
THREE.MeshPhongMaterial.prototype = new THREE.Material;
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.shading = c.shading !== void 0 ? c.shading : THREE.SmoothShading;
    this.wireframe = c.wireframe !== void 0 ? c.wireframe : !1;
    this.wireframeLinewidth = c.wireframeLinewidth !== void 0 ? c.wireframeLinewidth : 1
};
THREE.MeshDepthMaterial.prototype = new THREE.Material;
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.shading = c.shading ? c.shading : THREE.FlatShading;
    this.wireframe = c.wireframe ? c.wireframe : !1;
    this.wireframeLinewidth = c.wireframeLinewidth ? c.wireframeLinewidth : 1
};
THREE.MeshNormalMaterial.prototype = new THREE.Material;
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function () {};
THREE.MeshShaderMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.fragmentShader = c.fragmentShader !== void 0 ? c.fragmentShader : "void main() {}";
    this.vertexShader = c.vertexShader !== void 0 ? c.vertexShader : "void main() {}";
    this.uniforms = c.uniforms !== void 0 ? c.uniforms : {};
    this.attributes = c.attributes;
    this.shading = c.shading !== void 0 ? c.shading : THREE.SmoothShading;
    this.wireframe = c.wireframe !== void 0 ? c.wireframe : !1;
    this.wireframeLinewidth = c.wireframeLinewidth !== void 0 ? c.wireframeLinewidth : 1;
    this.fog = c.fog !== void 0 ? c.fog : !1;
    this.lights = c.lights !== void 0 ? c.lights : !1;
    this.vertexColors = c.vertexColors !== void 0 ? c.vertexColors : !1;
    this.skinning = c.skinning !== void 0 ? c.skinning : !1;
    this.morphTargets = c.morphTargets !== void 0 ? c.morphTargets : !1
};
THREE.MeshShaderMaterial.prototype = new THREE.Material;
THREE.MeshShaderMaterial.prototype.constructor = THREE.MeshShaderMaterial;
THREE.ParticleBasicMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.color = c.color !== void 0 ? new THREE.Color(c.color) : new THREE.Color(16777215);
    this.map = c.map !== void 0 ? c.map : null;
    this.size = c.size !== void 0 ? c.size : 1;
    this.sizeAttenuation = c.sizeAttenuation !== void 0 ? c.sizeAttenuation : !0;
    this.vertexColors = c.vertexColors !== void 0 ? c.vertexColors : !1
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material;
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.ParticleCanvasMaterial = function (c) {
    THREE.Material.call(this, c);
    c = c || {};
    this.color = c.color !== void 0 ? new THREE.Color(c.color) : new THREE.Color(16777215);
    this.program = c.program !== void 0 ? c.program : function () {}
};
THREE.ParticleCanvasMaterial.prototype = new THREE.Material;
THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial;
THREE.ParticleDOMMaterial = function (c) {
    THREE.Material.call(this);
    this.domElement = c
};
THREE.Texture = function (n, u, t, p, o, k) {
    this.id = THREE.TextureCount++;
    this.image = n;
    this.mapping = u !== void 0 ? u : new THREE.UVMapping;
    this.wrapS = t !== void 0 ? t : THREE.ClampToEdgeWrapping;
    this.wrapT = p !== void 0 ? p : THREE.ClampToEdgeWrapping;
    this.magFilter = o !== void 0 ? o : THREE.LinearFilter;
    this.minFilter = k !== void 0 ? k : THREE.LinearMipMapLinearFilter;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.needsUpdate = !1
};
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    clone: function () {
        var c = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
        c.offset.copy(this.offset);
        c.repeat.copy(this.repeat);
        return c
    }
};
THREE.TextureCount = 0;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.CubeReflectionMapping = function () {};
THREE.CubeRefractionMapping = function () {};
THREE.LatitudeReflectionMapping = function () {};
THREE.LatitudeRefractionMapping = function () {};
THREE.SphericalReflectionMapping = function () {};
THREE.SphericalRefractionMapping = function () {};
THREE.UVMapping = function () {};
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.DataTexture = function (z, y, x, w, v, p, t, o, A) {
    THREE.Texture.call(this, null, v, p, t, o, A);
    this.image = {
        data: z,
        width: y,
        height: x
    };
    this.format = w !== void 0 ? w : THREE.RGBAFormat
};
THREE.DataTexture.prototype = new THREE.Texture;
THREE.DataTexture.prototype.constructor = THREE.DataTexture;
THREE.DataTexture.prototype.clone = function () {
    var c = new THREE.DataTexture(this.data.slice(0), this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
    c.offset.copy(this.offset);
    c.repeat.copy(this.repeat);
    return c
};
THREE.Particle = function (c) {
    THREE.Object3D.call(this);
    this.materials = c instanceof Array ? c : [c]
};
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function (e, f) {
    THREE.Object3D.call(this);
    this.geometry = e;
    this.materials = f instanceof Array ? f : [f];
    this.sortParticles = !1
};
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function (f, k, h) {
    THREE.Object3D.call(this);
    this.geometry = f;
    this.materials = k instanceof Array ? k : [k];
    this.type = h != void 0 ? h : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function (f, k) {
    THREE.Object3D.call(this);
    this.geometry = f;
    this.materials = k && k.length ? k : [k];
    this.overdraw = !1;
    if (this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = f.boundingSphere.radius, this.geometry.morphTargets.length)) {
        this.morphTargetBase = -1;
        this.morphTargetForcedOrder = [];
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (var h = 0; h < this.geometry.morphTargets.length; h++) {
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[h].name] = h
        }
    }
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function (c) {
    if (this.morphTargetDictionary[c] !== void 0) {
        return this.morphTargetDictionary[c]
    }
    console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + c + " does not exist. Returning 0.");
    return 0
};
THREE.Bone = function (c) {
    THREE.Object3D.call(this);
    this.skin = c;
    this.skinMatrix = new THREE.Matrix4;
    this.hasNoneBoneChildren = !1
};
THREE.Bone.prototype = new THREE.Object3D;
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function (k, p, o) {
    this.matrixAutoUpdate && (p |= this.updateMatrix());
    if (p || this.matrixWorldNeedsUpdate) {
        k ? this.skinMatrix.multiply(k, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, p = !0
    }
    var n, m = this.children.length;
    if (this.hasNoneBoneChildren) {
        this.matrixWorld.multiply(this.skin.matrixWorld, this.skinMatrix);
        for (n = 0; n < m; n++) {
            k = this.children[n], k instanceof THREE.Bone ? k.update(this.skinMatrix, p, o) : k.update(this.matrixWorld, !0, o)
        }
    } else {
        for (n = 0; n < m; n++) {
            this.children[n].update(this.skinMatrix, p, o)
        }
    }
};
THREE.Bone.prototype.addChild = function (c) {
    if (this.children.indexOf(c) === -1 && (c.parent !== void 0 && c.parent.removeChild(c), c.parent = this, this.children.push(c), !(c instanceof THREE.Bone))) {
        this.hasNoneBoneChildren = !0
    }
};
THREE.SkinnedMesh = function (p, y) {
    THREE.Mesh.call(this, p, y);
    this.identityMatrix = new THREE.Matrix4;
    this.bones = [];
    this.boneMatrices = [];
    var w, v, u, o, t, x;
    if (this.geometry.bones !== void 0) {
        for (w = 0; w < this.geometry.bones.length; w++) {
            u = this.geometry.bones[w], o = u.pos, t = u.rotq, x = u.scl, v = this.addBone(), v.name = u.name, v.position.set(o[0], o[1], o[2]), v.quaternion.set(t[0], t[1], t[2], t[3]), v.useQuaternion = !0, x !== void 0 ? v.scale.set(x[0], x[1], x[2]) : v.scale.set(1, 1, 1)
        }
        for (w = 0; w < this.bones.length; w++) {
            u = this.geometry.bones[w], v = this.bones[w], u.parent === -1 ? this.addChild(v) : this.bones[u.parent].addChild(v)
        }
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        this.pose()
    }
};
THREE.SkinnedMesh.prototype = new THREE.Mesh;
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.update = function (k, p, o) {
    if (this.visible) {
        this.matrixAutoUpdate && (p |= this.updateMatrix());
        if (p || this.matrixWorldNeedsUpdate) {
            k ? this.matrixWorld.multiply(k, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, p = !0
        }
        var n, m = this.children.length;
        for (n = 0; n < m; n++) {
            k = this.children[n], k instanceof THREE.Bone ? k.update(this.identityMatrix, !1, o) : k.update(this.matrixWorld, p, o)
        }
        o = this.bones.length;
        ba = this.bones;
        bm = this.boneMatrices;
        for (p = 0; p < o; p++) {
            ba[p].skinMatrix.flattenToArrayOffset(bm, p * 16)
        }
    }
};
THREE.SkinnedMesh.prototype.addBone = function (c) {
    c === void 0 && (c = new THREE.Bone(this));
    this.bones.push(c);
    return c
};
THREE.SkinnedMesh.prototype.pose = function () {
    this.update(void 0, !0);
    for (var n, u = [], t = 0; t < this.bones.length; t++) {
        n = this.bones[t], u.push(THREE.Matrix4.makeInvert(n.skinMatrix)), n.skinMatrix.flattenToArrayOffset(this.boneMatrices, t * 16)
    }
    if (this.geometry.skinVerticesA === void 0) {
        this.geometry.skinVerticesA = [];
        this.geometry.skinVerticesB = [];
        var p;
        for (n = 0; n < this.geometry.skinIndices.length; n++) {
            var t = this.geometry.vertices[n].position,
                o = this.geometry.skinIndices[n].x,
                k = this.geometry.skinIndices[n].y;
            p = new THREE.Vector3(t.x, t.y, t.z);
            this.geometry.skinVerticesA.push(u[o].multiplyVector3(p));
            p = new THREE.Vector3(t.x, t.y, t.z);
            this.geometry.skinVerticesB.push(u[k].multiplyVector3(p));
            this.geometry.skinWeights[n].x + this.geometry.skinWeights[n].y !== 1 && (t = (1 - (this.geometry.skinWeights[n].x + this.geometry.skinWeights[n].y)) * 0.5, this.geometry.skinWeights[n].x += t, this.geometry.skinWeights[n].y += t)
        }
    }
};
THREE.Ribbon = function (e, f) {
    THREE.Object3D.call(this);
    this.geometry = e;
    this.materials = f instanceof Array ? f : [f]
};
THREE.Ribbon.prototype = new THREE.Object3D;
THREE.Ribbon.prototype.constructor = THREE.Ribbon;
THREE.LOD = function () {
    THREE.Object3D.call(this);
    this.LODs = []
};
THREE.LOD.prototype = new THREE.Object3D;
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.supr = THREE.Object3D.prototype;
THREE.LOD.prototype.add = function (f, k) {
    k === void 0 && (k = 0);
    for (var k = Math.abs(k), h = 0; h < this.LODs.length; h++) {
        if (k < this.LODs[h].visibleAtDistance) {
            break
        }
    }
    this.LODs.splice(h, 0, {
        visibleAtDistance: k,
        object3D: f
    });
    this.addChild(f)
};
THREE.LOD.prototype.update = function (h, n, m) {
    this.matrixAutoUpdate && (n |= this.updateMatrix());
    if (n || this.matrixWorldNeedsUpdate) {
        h ? this.matrixWorld.multiply(h, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, n = !0
    }
    if (this.LODs.length > 1) {
        h = m.matrixWorldInverse;
        h = -(h.n31 * this.position.x + h.n32 * this.position.y + h.n33 * this.position.z + h.n34);
        this.LODs[0].object3D.visible = !0;
        for (var k = 1; k < this.LODs.length; k++) {
            if (h >= this.LODs[k].visibleAtDistance) {
                this.LODs[k - 1].object3D.visible = !1, this.LODs[k].object3D.visible = !0
            } else {
                break
            }
        }
        for (; k < this.LODs.length; k++) {
            this.LODs[k].object3D.visible = !1
        }
    }
    for (h = 0; h < this.children.length; h++) {
        this.children[h].update(this.matrixWorld, n, m)
    }
};
THREE.Sprite = function (c) {
    THREE.Object3D.call(this);
    if (c.material !== void 0) {
        this.material = c.material, this.map = void 0, this.blending = material.blending
    } else {
        if (c.map !== void 0) {
            this.map = c.map instanceof THREE.Texture ? c.map : THREE.ImageUtils.loadTexture(c.map), this.material = void 0, this.blending = c.blending !== void 0 ? c.blending : THREE.NormalBlending
        }
    }
    this.useScreenCoordinates = c.useScreenCoordinates !== void 0 ? c.useScreenCoordinates : !0;
    this.mergeWith3D = c.mergeWith3D !== void 0 ? c.mergeWith3D : !this.useScreenCoordinates;
    this.affectedByDistance = c.affectedByDistance !== void 0 ? c.affectedByDistance : !this.useScreenCoordinates;
    this.scaleByViewport = c.scaleByViewport !== void 0 ? c.scaleByViewport : !this.affectedByDistance;
    this.alignment = c.alignment instanceof THREE.Vector2 ? c.alignment : THREE.SpriteAlignment.center;
    this.rotation3d = this.rotation;
    this.rotation = 0;
    this.opacity = 1;
    this.uvOffset = new THREE.Vector2(0, 0);
    this.uvScale = new THREE.Vector2(1, 1)
};
THREE.Sprite.prototype = new THREE.Object3D;
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.supr = THREE.Object3D.prototype;
THREE.Sprite.prototype.updateMatrix = function () {
    this.matrix.setPosition(this.position);
    this.rotation3d.set(0, 0, this.rotation);
    this.matrix.setRotationFromEuler(this.rotation3d);
    if (this.scale.x !== 1 || this.scale.y !== 1) {
        this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y)
    }
    this.matrixWorldNeedsUpdate = !0
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Scene = function () {
    THREE.Object3D.call(this);
    this.matrixAutoUpdate = !1;
    this.collisions = this.overrideMaterial = this.fog = null;
    this.objects = [];
    this.lights = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.supr = THREE.Object3D.prototype;
THREE.Scene.prototype.addChild = function (c) {
    this.supr.addChild.call(this, c);
    this.addChildRecurse(c)
};
THREE.Scene.prototype.addChildRecurse = function (e) {
    if (e instanceof THREE.Light) {
        this.lights.indexOf(e) === -1 && this.lights.push(e)
    } else {
        if (!(e instanceof THREE.Camera || e instanceof THREE.Bone) && this.objects.indexOf(e) === -1) {
            this.objects.push(e), this.__objectsAdded.push(e)
        }
    }
    for (var f = 0; f < e.children.length; f++) {
        this.addChildRecurse(e.children[f])
    }
};
THREE.Scene.prototype.removeChild = function (c) {
    this.supr.removeChild.call(this, c);
    this.removeChildRecurse(c)
};
THREE.Scene.prototype.removeChildRecurse = function (e) {
    if (e instanceof THREE.Light) {
        var f = this.lights.indexOf(e);
        f !== -1 && this.lights.splice(f, 1)
    } else {
        e instanceof THREE.Camera || (f = this.objects.indexOf(e), f !== -1 && (this.objects.splice(f, 1), this.__objectsRemoved.push(e)))
    }
    for (f = 0; f < e.children.length; f++) {
        this.removeChildRecurse(e.children[f])
    }
};
THREE.Scene.prototype.addObject = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeObject = THREE.Scene.prototype.removeChild;
THREE.Scene.prototype.addLight = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeLight = THREE.Scene.prototype.removeChild;
THREE.Fog = function (f, k, h) {
    this.color = new THREE.Color(f);
    this.near = k || 1;
    this.far = h || 1000
};
THREE.FogExp2 = function (e, f) {
    this.color = new THREE.Color(e);
    this.density = f !== void 0 ? f : 0.00025
};
THREE.DOMRenderer = function () {
    THREE.Renderer.call(this);
    var n = null,
        u = new THREE.Projector,
        t, p, o, k;
    this.domElement = document.createElement("div");
    this.setSize = function (e, f) {
        t = e;
        p = f;
        o = t / 2;
        k = p / 2
    };
    this.render = function (h, c) {
        var E, b, D, F, B, C, m, A;
        n = u.projectScene(h, c);
        E = 0;
        for (b = n.length; E < b; E++) {
            if (B = n[E], B instanceof THREE.RenderableParticle) {
                m = B.x * o + o;
                A = B.y * k + k;
                D = 0;
                for (F = B.material.length; D < F; D++) {
                    if (C = B.material[D], C instanceof THREE.ParticleDOMMaterial) {
                        C = C.domElement, C.style.left = m + "px", C.style.top = A + "px"
                    }
                }
            }
        }
    }
};
THREE.CanvasRenderer = function (aD) {
    function aC(c) {
        if (a4 != c) {
            al.globalAlpha = a4 = c
        }
    }
    function aA(c) {
        if (a2 != c) {
            switch (c) {
                case THREE.NormalBlending:
                    al.globalCompositeOperation = "source-over";
                    break;
                case THREE.AdditiveBlending:
                    al.globalCompositeOperation = "lighter";
                    break;
                case THREE.SubtractiveBlending:
                    al.globalCompositeOperation = "darker"
            }
            a2 = c
        }
    }
    function az(c) {
        if (aY != c) {
            al.strokeStyle = aY = c
        }
    }
    function ay(c) {
        if (aX != c) {
            al.fillStyle = aX = c
        }
    }
    var au = this,
        av = null,
        ar = new THREE.Projector,
        aD = aD || {}, an = aD.canvas !== void 0 ? aD.canvas : document.createElement("canvas"),
        ap, am, ao, ak, al = an.getContext("2d"),
        ai = new THREE.Color(0),
        aj = 0,
        a4 = 1,
        a2 = 0,
        aY = null,
        aX = null,
        a0 = null,
        aQ = null,
        aZ = null,
        aV, a3, aT, aK, aS = new THREE.RenderableVertex,
        aP = new THREE.RenderableVertex,
        aM, aO, aq, aI, a1, aN, aw, a7, bb, bf, a8, ae, bc = new THREE.Color(0),
        at = new THREE.Color(0),
        aH = new THREE.Color(0),
        af = new THREE.Color(0),
        J = new THREE.Color(0),
        ac = [],
        aJ, ag, ah, bj, bd, aW, ad, bg, a6, ab, aR = new THREE.Rectangle,
        aE = new THREE.Rectangle,
        aL = new THREE.Rectangle,
        A = !1,
        aU = new THREE.Color,
        Q = new THREE.Color,
        be = new THREE.Color,
        a5 = new THREE.Color,
        aB = new THREE.Vector3,
        aG, bi, bh, a9, aF, ax, aD = 16;
    aG = document.createElement("canvas");
    aG.width = aG.height = 2;
    bi = aG.getContext("2d");
    bi.fillStyle = "rgba(0,0,0,1)";
    bi.fillRect(0, 0, 2, 2);
    bh = bi.getImageData(0, 0, 2, 2);
    a9 = bh.data;
    aF = document.createElement("canvas");
    aF.width = aF.height = aD;
    ax = aF.getContext("2d");
    ax.translate(-aD / 2, -aD / 2);
    ax.scale(aD, aD);
    aD--;
    this.domElement = an;
    this.sortElements = this.sortObjects = this.autoClear = !0;
    this.data = {
        vertices: 0,
        faces: 0
    };
    this.setSize = function (c, f) {
        ap = c;
        am = f;
        ao = Math.floor(ap / 2);
        ak = Math.floor(am / 2);
        an.width = ap;
        an.height = am;
        aR.set(-ao, -ak, ao, ak);
        aE.set(-ao, -ak, ao, ak);
        a4 = 1;
        a2 = 0;
        aZ = aQ = a0 = aX = aY = null
    };
    this.setClearColor = function (c, f) {
        ai.copy(c);
        aj = f;
        aE.set(-ao, -ak, ao, ak)
    };
    this.setClearColorHex = function (c, f) {
        ai.setHex(c);
        aj = f;
        aE.set(-ao, -ak, ao, ak)
    };
    this.clear = function () {
        al.setTransform(1, 0, 0, -1, ao, ak);
        aE.isEmpty() || (aE.minSelf(aR), aE.inflate(2), aj < 1 && al.clearRect(Math.floor(aE.getX()), Math.floor(aE.getY()), Math.floor(aE.getWidth()), Math.floor(aE.getHeight())), aj > 0 && (aA(THREE.NormalBlending), aC(1), ay("rgba(" + Math.floor(ai.r * 255) + "," + Math.floor(ai.g * 255) + "," + Math.floor(ai.b * 255) + "," + aj + ")"), al.fillRect(Math.floor(aE.getX()), Math.floor(aE.getY()), Math.floor(aE.getWidth()), Math.floor(aE.getHeight()))), aE.empty())
    };
    this.render = function (V, I) {
        function P(p) {
            var y, z, v, u = p.lights;
            Q.setRGB(0, 0, 0);
            be.setRGB(0, 0, 0);
            a5.setRGB(0, 0, 0);
            p = 0;
            for (y = u.length; p < y; p++) {
                z = u[p], v = z.color, z instanceof THREE.AmbientLight ? (Q.r += v.r, Q.g += v.g, Q.b += v.b) : z instanceof THREE.DirectionalLight ? (be.r += v.r, be.g += v.g, be.b += v.b) : z instanceof THREE.PointLight && (a5.r += v.r, a5.g += v.g, a5.b += v.b)
            }
        }
        function E(H, D, G, B) {
            var y, z, v, p, u = H.lights,
                H = 0;
            for (y = u.length; H < y; H++) {
                z = u[H], v = z.color, z instanceof THREE.DirectionalLight ? (p = G.dot(z.position), p <= 0 || (p *= z.intensity, B.r += v.r * p, B.g += v.g * p, B.b += v.b * p)) : z instanceof THREE.PointLight && (p = G.dot(aB.sub(z.position, D).normalize()), p <= 0 || (p *= z.distance == 0 ? 1 : 1 - Math.min(D.distanceTo(z.position) / z.distance, 1), p != 0 && (p *= z.intensity, B.r += v.r * p, B.g += v.g * p, B.b += v.b * p)))
            }
        }
        function m(W, H, G) {
            aC(G.opacity);
            aA(G.blending);
            var z, B, Y, D, y, X;
            if (G instanceof THREE.ParticleBasicMaterial) {
                if (G.map) {
                    D = G.map.image, y = D.width >> 1, X = D.height >> 1, G = H.scale.x * ao, Y = H.scale.y * ak, z = G * y, B = Y * X, aL.set(W.x - z, W.y - B, W.x + z, W.y + B), aR.instersects(aL) && (al.save(), al.translate(W.x, W.y), al.rotate(-H.rotation), al.scale(G, -Y), al.translate(-y, -X), al.drawImage(D, 0, 0), al.restore())
                }
            } else {
                G instanceof THREE.ParticleCanvasMaterial && (z = H.scale.x * ao, B = H.scale.y * ak, aL.set(W.x - z, W.y - B, W.x + z, W.y + B), aR.instersects(aL) && (az(G.color.getContextStyle()), ay(G.color.getContextStyle()), al.save(), al.translate(W.x, W.y), al.rotate(-H.rotation), al.scale(z, B), G.program(al), al.restore()))
            }
        }
        function N(u, v, y, p) {
            aC(p.opacity);
            aA(p.blending);
            al.beginPath();
            al.moveTo(u.positionScreen.x, u.positionScreen.y);
            al.lineTo(v.positionScreen.x, v.positionScreen.y);
            al.closePath();
            if (p instanceof THREE.LineBasicMaterial) {
                u = p.linewidth;
                if (a0 != u) {
                    al.lineWidth = a0 = u
                }
                u = p.linecap;
                if (aQ != u) {
                    al.lineCap = aQ = u
                }
                u = p.linejoin;
                if (aZ != u) {
                    al.lineJoin = aZ = u
                }
                az(p.color.getContextStyle());
                al.stroke();
                aL.inflate(p.linewidth * 2)
            }
        }
        function t(G, D, z, B, v, W, y, u, H) {
            au.data.vertices += 3;
            au.data.faces++;
            aC(u.opacity);
            aA(u.blending);
            aM = G.positionScreen.x;
            aO = G.positionScreen.y;
            aq = D.positionScreen.x;
            aI = D.positionScreen.y;
            a1 = z.positionScreen.x;
            aN = z.positionScreen.y;
            C(aM, aO, aq, aI, a1, aN);
            if (u instanceof THREE.MeshBasicMaterial) {
                if (u.map) {
                    u.map.mapping instanceof THREE.UVMapping && (bj = y.uvs[0], h(aM, aO, aq, aI, a1, aN, bj[B].u, bj[B].v, bj[v].u, bj[v].v, bj[W].u, bj[W].v, u.map))
                } else {
                    if (u.envMap) {
                        if (u.envMap.mapping instanceof THREE.SphericalReflectionMapping) {
                            G = I.matrixWorldInverse, aB.copy(y.vertexNormalsWorld[0]), bd = (aB.x * G.n11 + aB.y * G.n12 + aB.z * G.n13) * 0.5 + 0.5, aW = -(aB.x * G.n21 + aB.y * G.n22 + aB.z * G.n23) * 0.5 + 0.5, aB.copy(y.vertexNormalsWorld[1]), ad = (aB.x * G.n11 + aB.y * G.n12 + aB.z * G.n13) * 0.5 + 0.5, bg = -(aB.x * G.n21 + aB.y * G.n22 + aB.z * G.n23) * 0.5 + 0.5, aB.copy(y.vertexNormalsWorld[2]), a6 = (aB.x * G.n11 + aB.y * G.n12 + aB.z * G.n13) * 0.5 + 0.5, ab = -(aB.x * G.n21 + aB.y * G.n22 + aB.z * G.n23) * 0.5 + 0.5, h(aM, aO, aq, aI, a1, aN, bd, aW, ad, bg, a6, ab, u.envMap)
                        }
                    } else {
                        u.wireframe ? c(u.color, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : x(u.color)
                    }
                }
            } else {
                if (u instanceof THREE.MeshLambertMaterial) {
                    u.map && !u.wireframe && (u.map.mapping instanceof THREE.UVMapping && (bj = y.uvs[0], h(aM, aO, aq, aI, a1, aN, bj[B].u, bj[B].v, bj[v].u, bj[v].v, bj[W].u, bj[W].v, u.map)), aA(THREE.SubtractiveBlending)), A ? !u.wireframe && u.shading == THREE.SmoothShading && y.vertexNormalsWorld.length == 3 ? (at.r = aH.r = af.r = Q.r, at.g = aH.g = af.g = Q.g, at.b = aH.b = af.b = Q.b, E(H, y.v1.positionWorld, y.vertexNormalsWorld[0], at), E(H, y.v2.positionWorld, y.vertexNormalsWorld[1], aH), E(H, y.v3.positionWorld, y.vertexNormalsWorld[2], af), J.r = (aH.r + af.r) * 0.5, J.g = (aH.g + af.g) * 0.5, J.b = (aH.b + af.b) * 0.5, ah = L(at, aH, af, J), f(aM, aO, aq, aI, a1, aN, 0, 0, 1, 0, 0, 1, ah)) : (aU.r = Q.r, aU.g = Q.g, aU.b = Q.b, E(H, y.centroidWorld, y.normalWorld, aU), bc.r = Math.max(0, Math.min(u.color.r * aU.r, 1)), bc.g = Math.max(0, Math.min(u.color.g * aU.g, 1)), bc.b = Math.max(0, Math.min(u.color.b * aU.b, 1)), u.wireframe ? c(bc, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : x(bc)) : u.wireframe ? c(u.color, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : x(u.color)
                } else {
                    if (u instanceof THREE.MeshDepthMaterial) {
                        aJ = I.near, ag = I.far, at.r = at.g = at.b = 1 - F(G.positionScreen.z, aJ, ag), aH.r = aH.g = aH.b = 1 - F(D.positionScreen.z, aJ, ag), af.r = af.g = af.b = 1 - F(z.positionScreen.z, aJ, ag), J.r = (aH.r + af.r) * 0.5, J.g = (aH.g + af.g) * 0.5, J.b = (aH.b + af.b) * 0.5, ah = L(at, aH, af, J), f(aM, aO, aq, aI, a1, aN, 0, 0, 1, 0, 0, 1, ah)
                    } else {
                        if (u instanceof THREE.MeshNormalMaterial) {
                            bc.r = K(y.normalWorld.x), bc.g = K(y.normalWorld.y), bc.b = K(y.normalWorld.z), u.wireframe ? c(bc, u.wireframeLinewidth, u.wireframeLinecap, u.wireframeLinejoin) : x(bc)
                        }
                    }
                }
            }
        }
        function M(G, D, z, B, v, u, y, W, H) {
            au.data.vertices += 4;
            au.data.faces++;
            aC(W.opacity);
            aA(W.blending);
            if (W.map || W.envMap) {
                t(G, D, B, 0, 1, 3, y, W, H), t(v, z, u, 1, 2, 3, y, W, H)
            } else {
                if (aM = G.positionScreen.x, aO = G.positionScreen.y, aq = D.positionScreen.x, aI = D.positionScreen.y, a1 = z.positionScreen.x, aN = z.positionScreen.y, aw = B.positionScreen.x, a7 = B.positionScreen.y, bb = v.positionScreen.x, bf = v.positionScreen.y, a8 = u.positionScreen.x, ae = u.positionScreen.y, W instanceof THREE.MeshBasicMaterial) {
                    w(aM, aO, aq, aI, a1, aN, aw, a7), W.wireframe ? c(W.color, W.wireframeLinewidth, W.wireframeLinecap, W.wireframeLinejoin) : x(W.color)
                } else {
                    if (W instanceof THREE.MeshLambertMaterial) {
                        A ? !W.wireframe && W.shading == THREE.SmoothShading && y.vertexNormalsWorld.length == 4 ? (at.r = aH.r = af.r = J.r = Q.r, at.g = aH.g = af.g = J.g = Q.g, at.b = aH.b = af.b = J.b = Q.b, E(H, y.v1.positionWorld, y.vertexNormalsWorld[0], at), E(H, y.v2.positionWorld, y.vertexNormalsWorld[1], aH), E(H, y.v4.positionWorld, y.vertexNormalsWorld[3], af), E(H, y.v3.positionWorld, y.vertexNormalsWorld[2], J), ah = L(at, aH, af, J), C(aM, aO, aq, aI, aw, a7), f(aM, aO, aq, aI, aw, a7, 0, 0, 1, 0, 0, 1, ah), C(bb, bf, a1, aN, a8, ae), f(bb, bf, a1, aN, a8, ae, 1, 0, 1, 1, 0, 1, ah)) : (aU.r = Q.r, aU.g = Q.g, aU.b = Q.b, E(H, y.centroidWorld, y.normalWorld, aU), bc.r = Math.max(0, Math.min(W.color.r * aU.r, 1)), bc.g = Math.max(0, Math.min(W.color.g * aU.g, 1)), bc.b = Math.max(0, Math.min(W.color.b * aU.b, 1)), w(aM, aO, aq, aI, a1, aN, aw, a7), W.wireframe ? c(bc, W.wireframeLinewidth, W.wireframeLinecap, W.wireframeLinejoin) : x(bc)) : (w(aM, aO, aq, aI, a1, aN, aw, a7), W.wireframe ? c(W.color, W.wireframeLinewidth, W.wireframeLinecap, W.wireframeLinejoin) : x(W.color))
                    } else {
                        if (W instanceof THREE.MeshNormalMaterial) {
                            bc.r = K(y.normalWorld.x), bc.g = K(y.normalWorld.y), bc.b = K(y.normalWorld.z), w(aM, aO, aq, aI, a1, aN, aw, a7), W.wireframe ? c(bc, W.wireframeLinewidth, W.wireframeLinecap, W.wireframeLinejoin) : x(bc)
                        } else {
                            if (W instanceof THREE.MeshDepthMaterial) {
                                aJ = I.near, ag = I.far, at.r = at.g = at.b = 1 - F(G.positionScreen.z, aJ, ag), aH.r = aH.g = aH.b = 1 - F(D.positionScreen.z, aJ, ag), af.r = af.g = af.b = 1 - F(B.positionScreen.z, aJ, ag), J.r = J.g = J.b = 1 - F(z.positionScreen.z, aJ, ag), ah = L(at, aH, af, J), C(aM, aO, aq, aI, aw, a7), f(aM, aO, aq, aI, aw, a7, 0, 0, 1, 0, 0, 1, ah), C(bb, bf, a1, aN, a8, ae), f(bb, bf, a1, aN, a8, ae, 1, 0, 1, 1, 0, 1, ah)
                            }
                        }
                    }
                }
            }
        }
        function C(p, z, B, y, u, v) {
            al.beginPath();
            al.moveTo(p, z);
            al.lineTo(B, y);
            al.lineTo(u, v);
            al.lineTo(p, z);
            al.closePath()
        }
        function w(u, B, G, z, v, y, p, D) {
            al.beginPath();
            al.moveTo(u, B);
            al.lineTo(G, z);
            al.lineTo(v, y);
            al.lineTo(p, D);
            al.lineTo(u, B);
            al.closePath()
        }
        function c(p, v, y, u) {
            if (a0 != v) {
                al.lineWidth = a0 = v
            }
            if (aQ != y) {
                al.lineCap = aQ = y
            }
            if (aZ != u) {
                al.lineJoin = aZ = u
            }
            az(p.getContextStyle());
            al.stroke();
            aL.inflate(v * 2)
        }
        function x(p) {
            ay(p.getContextStyle());
            al.fill()
        }
        function h(bk, Y, aa, X, W, H, B, G, bp, z, D, bo, bn) {
            if (bn.image.width != 0) {
                if (bn.needsUpdate == !0 || ac[bn.id] == void 0) {
                    var bl = bn.wrapS == THREE.RepeatWrapping,
                        y = bn.wrapT == THREE.RepeatWrapping;
                    ac[bn.id] = al.createPattern(bn.image, bl && y ? "repeat" : bl && !y ? "repeat-x" : !bl && y ? "repeat-y" : "no-repeat");
                    bn.needsUpdate = !1
                }
                ay(ac[bn.id]);
                var bl = bn.offset.x / bn.repeat.x,
                    y = bn.offset.y / bn.repeat.y,
                    Z = (bn.image.width - 1) * bn.repeat.x,
                    bn = (bn.image.height - 1) * bn.repeat.y,
                    B = (B + bl) * Z,
                    G = (G + y) * bn,
                    bp = (bp + bl) * Z,
                    z = (z + y) * bn,
                    D = (D + bl) * Z,
                    bo = (bo + y) * bn;
                aa -= bk;
                X -= Y;
                W -= bk;
                H -= Y;
                bp -= B;
                z -= G;
                D -= B;
                bo -= G;
                bl = 1 / (bp * bo - D * z);
                bn = (bo * aa - z * W) * bl;
                z = (bo * X - z * H) * bl;
                aa = (bp * W - D * aa) * bl;
                X = (bp * H - D * X) * bl;
                bk = bk - bn * B - aa * G;
                Y = Y - z * B - X * G;
                al.save();
                al.transform(bn, z, aa, X, bk, Y);
                al.fill();
                al.restore()
            }
        }
        function f(aa, Y, Z, X, H, W, G, z, D, bo, y, B, bn) {
            var bl, bk;
            bl = bn.width - 1;
            bk = bn.height - 1;
            G *= bl;
            z *= bk;
            D *= bl;
            bo *= bk;
            y *= bl;
            B *= bk;
            Z -= aa;
            X -= Y;
            H -= aa;
            W -= Y;
            D -= G;
            bo -= z;
            y -= G;
            B -= z;
            bk = 1 / (D * B - y * bo);
            bl = (B * Z - bo * H) * bk;
            bo = (B * X - bo * W) * bk;
            Z = (D * H - y * Z) * bk;
            X = (D * W - y * X) * bk;
            aa = aa - bl * G - Z * z;
            Y = Y - bo * G - X * z;
            al.save();
            al.transform(bl, bo, Z, X, aa, Y);
            al.clip();
            al.drawImage(bn, 0, 0);
            al.restore()
        }
        function L(Y, W, X, H) {
            var D = ~~ (Y.r * 255),
                G = ~~ (Y.g * 255),
                Y = ~~ (Y.b * 255),
                B = ~~ (W.r * 255),
                y = ~~ (W.g * 255),
                W = ~~ (W.b * 255),
                z = ~~ (X.r * 255),
                aa = ~~ (X.g * 255),
                X = ~~ (X.b * 255),
                v = ~~ (H.r * 255),
                Z = ~~ (H.g * 255),
                H = ~~ (H.b * 255);
            a9[0] = D < 0 ? 0 : D > 255 ? 255 : D;
            a9[1] = G < 0 ? 0 : G > 255 ? 255 : G;
            a9[2] = Y < 0 ? 0 : Y > 255 ? 255 : Y;
            a9[4] = B < 0 ? 0 : B > 255 ? 255 : B;
            a9[5] = y < 0 ? 0 : y > 255 ? 255 : y;
            a9[6] = W < 0 ? 0 : W > 255 ? 255 : W;
            a9[8] = z < 0 ? 0 : z > 255 ? 255 : z;
            a9[9] = aa < 0 ? 0 : aa > 255 ? 255 : aa;
            a9[10] = X < 0 ? 0 : X > 255 ? 255 : X;
            a9[12] = v < 0 ? 0 : v > 255 ? 255 : v;
            a9[13] = Z < 0 ? 0 : Z > 255 ? 255 : Z;
            a9[14] = H < 0 ? 0 : H > 255 ? 255 : H;
            bi.putImageData(bh, 0, 0);
            ax.drawImage(aG, 0, 0);
            return aF
        }
        function F(p, u, v) {
            p = (p - u) / (v - u);
            return p * p * (3 - 2 * p)
        }
        function K(p) {
            p = (p + 1) * 0.5;
            return p < 0 ? 0 : p > 1 ? 1 : p
        }
        function S(p, y) {
            var z = y.x - p.x,
                v = y.y - p.y,
                u = z * z + v * v;
            u != 0 && (u = 1 / Math.sqrt(u), z *= u, v *= u, y.x += z, y.y += v, p.x -= z, p.y -= v)
        }
        var U, k, R, o, e, T, n, O;
        this.autoClear ? this.clear() : al.setTransform(1, 0, 0, -1, ao, ak);
        au.data.vertices = 0;
        au.data.faces = 0;
        av = ar.projectScene(V, I, this.sortElements);
        (A = V.lights.length > 0) && P(V);
        U = 0;
        for (k = av.length; U < k; U++) {
            R = av[U];
            aL.empty();
            if (R instanceof THREE.RenderableParticle) {
                aV = R;
                aV.x *= ao;
                aV.y *= ak;
                o = 0;
                for (e = R.materials.length; o < e;) {
                    O = R.materials[o++], O.opacity != 0 && m(aV, R, O, V)
                }
            } else {
                if (R instanceof THREE.RenderableLine) {
                    if (aV = R.v1, a3 = R.v2, aV.positionScreen.x *= ao, aV.positionScreen.y *= ak, a3.positionScreen.x *= ao, a3.positionScreen.y *= ak, aL.addPoint(aV.positionScreen.x, aV.positionScreen.y), aL.addPoint(a3.positionScreen.x, a3.positionScreen.y), aR.instersects(aL)) {
                        o = 0;
                        for (e = R.materials.length; o < e;) {
                            O = R.materials[o++], O.opacity != 0 && N(aV, a3, R, O, V)
                        }
                    }
                } else {
                    if (R instanceof THREE.RenderableFace3) {
                        if (aV = R.v1, a3 = R.v2, aT = R.v3, aV.positionScreen.x *= ao, aV.positionScreen.y *= ak, a3.positionScreen.x *= ao, a3.positionScreen.y *= ak, aT.positionScreen.x *= ao, aT.positionScreen.y *= ak, R.overdraw && (S(aV.positionScreen, a3.positionScreen), S(a3.positionScreen, aT.positionScreen), S(aT.positionScreen, aV.positionScreen)), aL.add3Points(aV.positionScreen.x, aV.positionScreen.y, a3.positionScreen.x, a3.positionScreen.y, aT.positionScreen.x, aT.positionScreen.y), aR.instersects(aL)) {
                            o = 0;
                            for (e = R.meshMaterials.length; o < e;) {
                                if (O = R.meshMaterials[o++], O instanceof THREE.MeshFaceMaterial) {
                                    T = 0;
                                    for (n = R.faceMaterials.length; T < n;) {
                                        (O = R.faceMaterials[T++]) && O.opacity != 0 && t(aV, a3, aT, 0, 1, 2, R, O, V)
                                    }
                                } else {
                                    O.opacity != 0 && t(aV, a3, aT, 0, 1, 2, R, O, V)
                                }
                            }
                        }
                    } else {
                        if (R instanceof THREE.RenderableFace4 && (aV = R.v1, a3 = R.v2, aT = R.v3, aK = R.v4, aV.positionScreen.x *= ao, aV.positionScreen.y *= ak, a3.positionScreen.x *= ao, a3.positionScreen.y *= ak, aT.positionScreen.x *= ao, aT.positionScreen.y *= ak, aK.positionScreen.x *= ao, aK.positionScreen.y *= ak, aS.positionScreen.copy(a3.positionScreen), aP.positionScreen.copy(aK.positionScreen), R.overdraw && (S(aV.positionScreen, a3.positionScreen), S(a3.positionScreen, aK.positionScreen), S(aK.positionScreen, aV.positionScreen), S(aT.positionScreen, aS.positionScreen), S(aT.positionScreen, aP.positionScreen)), aL.addPoint(aV.positionScreen.x, aV.positionScreen.y), aL.addPoint(a3.positionScreen.x, a3.positionScreen.y), aL.addPoint(aT.positionScreen.x, aT.positionScreen.y), aL.addPoint(aK.positionScreen.x, aK.positionScreen.y), aR.instersects(aL))) {
                            o = 0;
                            for (e = R.meshMaterials.length; o < e;) {
                                if (O = R.meshMaterials[o++], O instanceof THREE.MeshFaceMaterial) {
                                    T = 0;
                                    for (n = R.faceMaterials.length; T < n;) {
                                        (O = R.faceMaterials[T++]) && O.opacity != 0 && M(aV, a3, aT, aK, aS, aP, R, O, V)
                                    }
                                } else {
                                    O.opacity != 0 && M(aV, a3, aT, aK, aS, aP, R, O, V)
                                }
                            }
                        }
                    }
                }
            }
            aE.addRectangle(aL)
        }
        al.setTransform(1, 0, 0, 1, 0, 0)
    }
};
THREE.WebGLRenderer = function () {
    function ax(o, v, w) {
        var u, p, t, n;
        u = 0;
        for (p = o.lights.length; u < p; u++) {
            t = o.lights[u], t instanceof THREE.DirectionalLight ? (n = v.normalWorld.dot(t.position) * t.intensity, n > 0 && (w.r += t.color.r * n, w.g += t.color.g * n, w.b += t.color.b * n)) : t instanceof THREE.PointLight && (J.sub(t.position, v.centroidWorld), J.normalize(), n = v.normalWorld.dot(J) * t.intensity, n > 0 && (w.r += t.color.r * n, w.g += t.color.g * n, w.b += t.color.b * n))
        }
    }
    function aw(h, u, b, m, p, f) {
        aq.data.vertices += 3;
        aq.data.faces++;
        M = au(Q++);
        M.setAttribute("d", "M " + h.positionScreen.x + " " + h.positionScreen.y + " L " + u.positionScreen.x + " " + u.positionScreen.y + " L " + b.positionScreen.x + "," + b.positionScreen.y + "z");
        p instanceof THREE.MeshBasicMaterial ? ai.copy(p.color) : p instanceof THREE.MeshLambertMaterial ? ac ? (T.r = ag.r, T.g = ag.g, T.b = ag.b, ax(f, m, T), ai.r = Math.max(0, Math.min(p.color.r * T.r, 1)), ai.g = Math.max(0, Math.min(p.color.g * T.g, 1)), ai.b = Math.max(0, Math.min(p.color.b * T.b, 1))) : ai.copy(p.color) : p instanceof THREE.MeshDepthMaterial ? (X = 1 - p.__2near / (p.__farPlusNear - m.z * p.__farMinusNear), ai.setRGB(X, X, X)) : p instanceof THREE.MeshNormalMaterial && ai.setRGB(at(m.normalWorld.x), at(m.normalWorld.y), at(m.normalWorld.z));
        p.wireframe ? M.setAttribute("style", "fill: none; stroke: " + ai.getContextStyle() + "; stroke-width: " + p.wireframeLinewidth + "; stroke-opacity: " + p.opacity + "; stroke-linecap: " + p.wireframeLinecap + "; stroke-linejoin: " + p.wireframeLinejoin) : M.setAttribute("style", "fill: " + ai.getContextStyle() + "; fill-opacity: " + p.opacity);
        ah.appendChild(M)
    }
    function av(m, w, b, u, v, f, h) {
        aq.data.vertices += 4;
        aq.data.faces++;
        M = au(Q++);
        M.setAttribute("d", "M " + m.positionScreen.x + " " + m.positionScreen.y + " L " + w.positionScreen.x + " " + w.positionScreen.y + " L " + b.positionScreen.x + "," + b.positionScreen.y + " L " + u.positionScreen.x + "," + u.positionScreen.y + "z");
        f instanceof THREE.MeshBasicMaterial ? ai.copy(f.color) : f instanceof THREE.MeshLambertMaterial ? ac ? (T.r = ag.r, T.g = ag.g, T.b = ag.b, ax(h, v, T), ai.r = Math.max(0, Math.min(f.color.r * T.r, 1)), ai.g = Math.max(0, Math.min(f.color.g * T.g, 1)), ai.b = Math.max(0, Math.min(f.color.b * T.b, 1))) : ai.copy(f.color) : f instanceof THREE.MeshDepthMaterial ? (X = 1 - f.__2near / (f.__farPlusNear - v.z * f.__farMinusNear), ai.setRGB(X, X, X)) : f instanceof THREE.MeshNormalMaterial && ai.setRGB(at(v.normalWorld.x), at(v.normalWorld.y), at(v.normalWorld.z));
        f.wireframe ? M.setAttribute("style", "fill: none; stroke: " + ai.getContextStyle() + "; stroke-width: " + f.wireframeLinewidth + "; stroke-opacity: " + f.opacity + "; stroke-linecap: " + f.wireframeLinecap + "; stroke-linejoin: " + f.wireframeLinejoin) : M.setAttribute("style", "fill: " + ai.getContextStyle() + "; fill-opacity: " + f.opacity);
        ah.appendChild(M)
    }
    function au(c) {
        V[c] == null && (V[c] = document.createElementNS("http://www.w3.org/2000/svg", "path"), A == 0 && V[c].setAttribute("shape-rendering", "crispEdges"));
        return V[c]
    }
    function at(c) {
        c = (c + 1) * 0.5;
        return c < 0 ? 0 : c > 1 ? 1 : c
    }
    var aq = this,
        ar = null,
        ap = new THREE.Projector,
        ah = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        an, af, aj, ab, ad, Y, Z, am, ak = new THREE.Rectangle,
        ae = new THREE.Rectangle,
        ac = !1,
        ai = new THREE.Color(16777215),
        T = new THREE.Color(16777215),
        ag = new THREE.Color(0),
        aa = new THREE.Color(0),
        al = new THREE.Color(0),
        X, J = new THREE.Vector3,
        V = [],
        R = [],
        M, Q, ao, A = 1;
    this.domElement = ah;
    this.sortElements = this.sortObjects = this.autoClear = !0;
    this.data = {
        vertices: 0,
        faces: 0
    };
    this.setQuality = function (c) {
        switch (c) {
            case "high":
                A = 1;
                break;
            case "low":
                A = 0
        }
    };
    this.setSize = function (c, f) {
        an = c;
        af = f;
        aj = an / 2;
        ab = af / 2;
        ah.setAttribute("viewBox", -aj + " " + -ab + " " + an + " " + af);
        ah.setAttribute("width", an);
        ah.setAttribute("height", af);
        ak.set(-aj, -ab, aj, ab)
    };
    this.clear = function () {
        for (; ah.childNodes.length > 0;) {
            ah.removeChild(ah.childNodes[0])
        }
    };
    this.render = function (w, n) {
        var m, c, x, y, o, t, u, k;
        this.autoClear && this.clear();
        aq.data.vertices = 0;
        aq.data.faces = 0;
        ar = ap.projectScene(w, n, this.sortElements);
        ao = Q = 0;
        if (ac = w.lights.length > 0) {
            u = w.lights;
            ag.setRGB(0, 0, 0);
            aa.setRGB(0, 0, 0);
            al.setRGB(0, 0, 0);
            m = 0;
            for (c = u.length; m < c; m++) {
                x = u[m], y = x.color, x instanceof THREE.AmbientLight ? (ag.r += y.r, ag.g += y.g, ag.b += y.b) : x instanceof THREE.DirectionalLight ? (aa.r += y.r, aa.g += y.g, aa.b += y.b) : x instanceof THREE.PointLight && (al.r += y.r, al.g += y.g, al.b += y.b)
            }
        }
        m = 0;
        for (c = ar.length; m < c; m++) {
            if (u = ar[m], ae.empty(), u instanceof THREE.RenderableParticle) {
                ad = u;
                ad.x *= aj;
                ad.y *= -ab;
                x = 0;
                for (y = u.materials.length; x < y;) {
                    x++
                }
            } else {
                if (u instanceof THREE.RenderableLine) {
                    if (ad = u.v1, Y = u.v2, ad.positionScreen.x *= aj, ad.positionScreen.y *= -ab, Y.positionScreen.x *= aj, Y.positionScreen.y *= -ab, ae.addPoint(ad.positionScreen.x, ad.positionScreen.y), ae.addPoint(Y.positionScreen.x, Y.positionScreen.y), ak.instersects(ae)) {
                        x = 0;
                        for (y = u.materials.length; x < y;) {
                            if ((k = u.materials[x++]) && k.opacity != 0) {
                                o = ad;
                                t = Y;
                                var e = ao++;
                                R[e] == null && (R[e] = document.createElementNS("http://www.w3.org/2000/svg", "line"), A == 0 && R[e].setAttribute("shape-rendering", "crispEdges"));
                                M = R[e];
                                M.setAttribute("x1", o.positionScreen.x);
                                M.setAttribute("y1", o.positionScreen.y);
                                M.setAttribute("x2", t.positionScreen.x);
                                M.setAttribute("y2", t.positionScreen.y);
                                k instanceof THREE.LineBasicMaterial && (M.setAttribute("style", "fill: none; stroke: " + k.color.getContextStyle() + "; stroke-width: " + k.linewidth + "; stroke-opacity: " + k.opacity + "; stroke-linecap: " + k.linecap + "; stroke-linejoin: " + k.linejoin), ah.appendChild(M))
                            }
                        }
                    }
                } else {
                    if (u instanceof THREE.RenderableFace3) {
                        if (ad = u.v1, Y = u.v2, Z = u.v3, ad.positionScreen.x *= aj, ad.positionScreen.y *= -ab, Y.positionScreen.x *= aj, Y.positionScreen.y *= -ab, Z.positionScreen.x *= aj, Z.positionScreen.y *= -ab, ae.addPoint(ad.positionScreen.x, ad.positionScreen.y), ae.addPoint(Y.positionScreen.x, Y.positionScreen.y), ae.addPoint(Z.positionScreen.x, Z.positionScreen.y), ak.instersects(ae)) {
                            x = 0;
                            for (y = u.meshMaterials.length; x < y;) {
                                if (k = u.meshMaterials[x++], k instanceof THREE.MeshFaceMaterial) {
                                    o = 0;
                                    for (t = u.faceMaterials.length; o < t;) {
                                        (k = u.faceMaterials[o++]) && k.opacity != 0 && aw(ad, Y, Z, u, k, w)
                                    }
                                } else {
                                    k && k.opacity != 0 && aw(ad, Y, Z, u, k, w)
                                }
                            }
                        }
                    } else {
                        if (u instanceof THREE.RenderableFace4 && (ad = u.v1, Y = u.v2, Z = u.v3, am = u.v4, ad.positionScreen.x *= aj, ad.positionScreen.y *= -ab, Y.positionScreen.x *= aj, Y.positionScreen.y *= -ab, Z.positionScreen.x *= aj, Z.positionScreen.y *= -ab, am.positionScreen.x *= aj, am.positionScreen.y *= -ab, ae.addPoint(ad.positionScreen.x, ad.positionScreen.y), ae.addPoint(Y.positionScreen.x, Y.positionScreen.y), ae.addPoint(Z.positionScreen.x, Z.positionScreen.y), ae.addPoint(am.positionScreen.x, am.positionScreen.y), ak.instersects(ae))) {
                            x = 0;
                            for (y = u.meshMaterials.length; x < y;) {
                                if (k = u.meshMaterials[x++], k instanceof THREE.MeshFaceMaterial) {
                                    o = 0;
                                    for (t = u.faceMaterials.length; o < t;) {
                                        (k = u.faceMaterials[o++]) && k.opacity != 0 && av(ad, Y, Z, am, u, k, w)
                                    }
                                } else {
                                    k && k.opacity != 0 && av(ad, Y, Z, am, u, k, w)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
THREE.ShaderChunk = {
    fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
    fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif",
    envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[ 0 ].xyz, objectMatrix[ 1 ].xyz, objectMatrix[ 2 ].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
    map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",
    map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
    map_vertex: "#ifdef USE_MAP\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
    map_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
    lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
    lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
    lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
    lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef PHONG\nvPointLight[ i ] = vec4( lVector, lDistance );\n#endif\n}\n#endif\n}",
    lights_pars_fragment: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
    lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( vec3( 0.0 ), 1.0 );\nvec4 pointSpecular = vec4( vec3( 0.0 ), 1.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + viewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight * pointDistance;\npointSpecular += mSpecular * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( vec3( 0.0 ), 1.0 );\nvec4 dirSpecular = vec4( vec3( 0.0 ), 1.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
    color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
    color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_vertex: "#ifdef USE_COLOR\nvColor = color;\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif",
    default_vertex: "#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform float shadowDarkness;\nuniform float shadowBias;\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",
    shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_SOFT\nconst float xPixelOffset = 1.0 / SHADOWMAP_WIDTH;\nconst float yPixelOffset = 1.0 / SHADOWMAP_HEIGHT;\n#endif\nvec4 shadowColor = vec4( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nif ( shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0 ) {\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nfor ( float y = -1.25; y <= 1.25; y += 1.25 )\nfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\nvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < ( shadowCoord.z + shadowBias ) )\nshadow += 1.0;\n}\nshadow /= 9.0;\nshadowColor = shadowColor * vec4( vec3( ( 1.0 - shadowDarkness * shadow ) ), 1.0 );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < ( shadowCoord.z + shadowBias ) )\nshadowColor = shadowColor * vec4( vec3( shadowDarkness ), 1.0 );\n#endif\n}\n}\ngl_FragColor = gl_FragColor * shadowColor;\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * objectMatrix * vec4( position, 1.0 );\n}\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif"
};
THREE.UniformsUtils = {
    merge: function (k) {
        var p, o, n, m = {};
        for (p = 0; p < k.length; p++) {
            for (o in n = this.clone(k[p]), n) {
                m[o] = n[o]
            }
        }
        return m
    },
    clone: function (k) {
        var p, o, n, m = {};
        for (p in k) {
            for (o in m[p] = {}, k[p]) {
                n = k[p][o], m[p][o] = n instanceof THREE.Color || n instanceof THREE.Vector2 || n instanceof THREE.Vector3 || n instanceof THREE.Vector4 || n instanceof THREE.Matrix4 || n instanceof THREE.Texture ? n.clone() : n instanceof Array ? n.slice() : n
            }
        }
        return m
    }
};
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: 0,
            texture: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        lightMap: {
            type: "t",
            value: 2,
            texture: null
        },
        envMap: {
            type: "t",
            value: 1,
            texture: null
        },
        useRefract: {
            type: "i",
            value: 0
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: 0.98
        },
        combine: {
            type: "i",
            value: 0
        },
        morphTargetInfluences: {
            type: "f",
            value: 0
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 0.00025
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2000
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        enableLighting: {
            type: "i",
            value: 1
        },
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightDistance: {
            type: "fv1",
            value: []
        }
    },
    particle: {
        psColor: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: 0,
            texture: null
        },
        fogDensity: {
            type: "f",
            value: 0.00025
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2000
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    shadowmap: {
        shadowMap: {
            type: "tv",
            value: 3,
            texture: []
        },
        shadowMatrix: {
            type: "m4v",
            value: []
        },
        shadowBias: {
            type: "f",
            value: 0.0039
        },
        shadowDarkness: {
            type: "f",
            value: 0.2
        }
    }
};
THREE.ShaderLib = {
    lensFlareVertexTexture: {
        vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 UV;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D map;\nuniform float opacity;\nuniform int renderType;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * vVisibility;\ngl_FragColor = color;\n}\n}"
    },
    lensFlare: {
        vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nattribute vec2 position;\nattribute vec2 UV;\nvarying vec2 vUV;\nvoid main() {\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform int renderType;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * visibility;\ngl_FragColor = color;\n}\n}"
    },
    sprite: {
        vertexShader: "uniform int useScreenCoordinates;\nuniform int affectedByDistance;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
        fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D map;\nuniform float opacity;\nvarying vec2 vUV;\nvoid main() {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity;\ngl_FragColor = color;\n}"
    },
    shadowPost: {
        vertexShader: "uniform \tmat4 \tprojectionMatrix;\nattribute \tvec3 \tposition;\nvoid main() {\ngl_Position = projectionMatrix * vec4( position, 1.0 );\n}",
        fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform \tfloat \tdarkness;\nvoid main() {\ngl_FragColor = vec4( 0, 0, 0, darkness );\n}"
    },
    shadowVolumeDynamic: {
        uniforms: {
            directionalLightDirection: {
                type: "fv",
                value: []
            }
        },
        vertexShader: "uniform \tvec3 \tdirectionalLightDirection;\nvoid main() {\nvec4 pos      = objectMatrix * vec4( position, 1.0 );\nvec3 norm     = mat3( objectMatrix[ 0 ].xyz, objectMatrix[ 1 ].xyz, objectMatrix[ 2 ].xyz ) * normal;\nvec4 extruded = vec4( directionalLightDirection * 5000.0 * step( 0.0, dot( directionalLightDirection, norm ) ), 0.0 );\ngl_Position   = projectionMatrix * viewMatrix * ( pos + extruded );\n}",
        fragmentShader: "void main() {\ngl_FragColor = vec4( 1.0 );\n}"
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2000
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}",
        vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}",
        vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"
    },
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
        vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap]),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, "gl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
        vertexShader: ["varying vec3 vLightWeighting;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(328965)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            }
        }]),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.lights_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
        vertexShader: ["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = -mvPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
        fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
        vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}",
        vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n")
    }
};
THREE.WebGLRenderer = function (bf) {
    function be(V, S, U) {
        var R, O, P, N = V.vertices,
            L = N.length,
            I = V.colors,
            K = I.length,
            H = V.__vertexArray,
            G = V.__colorArray,
            F = V.__sortArray,
            E = V.__dirtyVertices,
            B = V.__dirtyColors,
            o = V.__webglCustomAttributes,
            C, D;
        if (o) {
            for (C in o) {
                o[C].offset = 0
            }
        }
        if (U.sortParticles) {
            aL.multiplySelf(U.matrixWorld);
            for (R = 0; R < L; R++) {
                O = N[R].position, aM.copy(O), aL.multiplyVector3(aM), F[R] = [aM.z, R]
            }
            F.sort(function (c, f) {
                return f[0] - c[0]
            });
            for (R = 0; R < L; R++) {
                O = N[F[R][1]].position, P = R * 3, H[P] = O.x, H[P + 1] = O.y, H[P + 2] = O.z
            }
            for (R = 0; R < K; R++) {
                P = R * 3, color = I[F[R][1]], G[P] = color.r, G[P + 1] = color.g, G[P + 2] = color.b
            }
            if (o) {
                for (C in o) {
                    R = o[C];
                    I = R.value.length;
                    for (P = 0; P < I; P++) {
                        index = F[P][1];
                        K = R.offset;
                        if (R.size === 1) {
                            if (R.boundTo === void 0 || R.boundTo === "vertices") {
                                R.array[K] = R.value[index]
                            }
                        } else {
                            if (R.boundTo === void 0 || R.boundTo === "vertices") {
                                D = R.value[index]
                            }
                            R.size === 2 ? (R.array[K] = D.x, R.array[K + 1] = D.y) : R.size === 3 ? R.type === "c" ? (R.array[K] = D.r, R.array[K + 1] = D.g, R.array[K + 2] = D.b) : (R.array[K] = D.x, R.array[K + 1] = D.y, R.array[K + 2] = D.z) : (R.array[K] = D.x, R.array[K + 1] = D.y, R.array[K + 2] = D.z, R.array[K + 3] = D.w)
                        }
                        R.offset += R.size
                    }
                }
            }
        } else {
            if (E) {
                for (R = 0; R < L; R++) {
                    O = N[R].position, P = R * 3, H[P] = O.x, H[P + 1] = O.y, H[P + 2] = O.z
                }
            }
            if (B) {
                for (R = 0; R < K; R++) {
                    color = I[R], P = R * 3, G[P] = color.r, G[P + 1] = color.g, G[P + 2] = color.b
                }
            }
            if (o) {
                for (C in o) {
                    if (R = o[C], R.__original.needsUpdate) {
                        I = R.value.length;
                        for (P = 0; P < I; P++) {
                            K = R.offset;
                            if (R.size === 1) {
                                if (R.boundTo === void 0 || R.boundTo === "vertices") {
                                    R.array[K] = R.value[P]
                                }
                            } else {
                                if (R.boundTo === void 0 || R.boundTo === "vertices") {
                                    D = R.value[P]
                                }
                                R.size === 2 ? (R.array[K] = D.x, R.array[K + 1] = D.y) : R.size === 3 ? R.type === "c" ? (R.array[K] = D.r, R.array[K + 1] = D.g, R.array[K + 2] = D.b) : (R.array[K] = D.x, R.array[K + 1] = D.y, R.array[K + 2] = D.z) : (R.array[K] = D.x, R.array[K + 1] = D.y, R.array[K + 2] = D.z, R.array[K + 3] = D.w)
                            }
                            R.offset += R.size
                        }
                    }
                }
            }
        }
        if (E || U.sortParticles) {
            a6.bindBuffer(a6.ARRAY_BUFFER, V.__webglVertexBuffer), a6.bufferData(a6.ARRAY_BUFFER, H, S)
        }
        if (B || U.sortParticles) {
            a6.bindBuffer(a6.ARRAY_BUFFER, V.__webglColorBuffer), a6.bufferData(a6.ARRAY_BUFFER, G, S)
        }
        if (o) {
            for (C in o) {
                if (R = o[C], R.__original.needsUpdate || U.sortParticles) {
                    a6.bindBuffer(a6.ARRAY_BUFFER, R.buffer), a6.bufferData(a6.ARRAY_BUFFER, R.array, S)
                }
            }
        }
    }
    function bd(bq, bo, bp, bn, bl) {
        bn.program || aq.initMaterial(bn, bo, bp, bl);
        if (bn.morphTargets && !bl.__webglMorphTargetInfluences) {
            bl.__webglMorphTargetInfluences = new Float32Array(aq.maxMorphTargets);
            for (var bk = 0, bj = aq.maxMorphTargets; bk < bj; bk++) {
                bl.__webglMorphTargetInfluences[bk] = 0
            }
        }
        var bk = bn.program,
            bj = bk.uniforms,
            bi = bn.uniforms;
        bk != ae && (a6.useProgram(bk), ae = bk);
        a6.uniformMatrix4fv(bj.projectionMatrix, !1, aN);
        if (bp && (bn instanceof THREE.MeshBasicMaterial || bn instanceof THREE.MeshLambertMaterial || bn instanceof THREE.MeshPhongMaterial || bn instanceof THREE.LineBasicMaterial || bn instanceof THREE.ParticleBasicMaterial || bn.fog)) {
            if (bi.fogColor.value = bp.color, bp instanceof THREE.Fog) {
                bi.fogNear.value = bp.near, bi.fogFar.value = bp.far
            } else {
                if (bp instanceof THREE.FogExp2) {
                    bi.fogDensity.value = bp.density
                }
            }
        }
        if (bn instanceof THREE.MeshPhongMaterial || bn instanceof THREE.MeshLambertMaterial || bn.lights) {
            var bh, Y, W, U = 0,
                R = 0,
                O = 0,
                K, F, L, N = ak,
                bg = N.directional.colors,
                o = N.directional.positions,
                aa = N.point.colors,
                S = N.point.positions,
                P = N.point.distances,
                X = 0,
                C = 0,
                bp = Y = L = 0;
            for (bh = bo.length; bp < bh; bp++) {
                if (Y = bo[bp], W = Y.color, K = Y.position, F = Y.intensity, L = Y.distance, Y instanceof THREE.AmbientLight) {
                    U += W.r, R += W.g, O += W.b
                } else {
                    if (Y instanceof THREE.DirectionalLight) {
                        L = X * 3, bg[L] = W.r * F, bg[L + 1] = W.g * F, bg[L + 2] = W.b * F, o[L] = K.x, o[L + 1] = K.y, o[L + 2] = K.z, X += 1
                    } else {
                        if (Y instanceof THREE.SpotLight) {
                            L = X * 3, bg[L] = W.r * F, bg[L + 1] = W.g * F, bg[L + 2] = W.b * F, W = 1 / K.length(), o[L] = K.x * W, o[L + 1] = K.y * W, o[L + 2] = K.z * W, X += 1
                        } else {
                            if (Y instanceof THREE.PointLight) {
                                Y = C * 3, aa[Y] = W.r * F, aa[Y + 1] = W.g * F, aa[Y + 2] = W.b * F, S[Y] = K.x, S[Y + 1] = K.y, S[Y + 2] = K.z, P[C] = L, C += 1
                            }
                        }
                    }
                }
            }
            for (bp = X * 3; bp < bg.length; bp++) {
                bg[bp] = 0
            }
            for (bp = C * 3; bp < aa.length; bp++) {
                aa[bp] = 0
            }
            N.point.length = C;
            N.directional.length = X;
            N.ambient[0] = U;
            N.ambient[1] = R;
            N.ambient[2] = O;
            bo = ak;
            bi.enableLighting.value = bo.directional.length + bo.point.length;
            bi.ambientLightColor.value = bo.ambient;
            bi.directionalLightColor.value = bo.directional.colors;
            bi.directionalLightDirection.value = bo.directional.positions;
            bi.pointLightColor.value = bo.point.colors;
            bi.pointLightPosition.value = bo.point.positions;
            bi.pointLightDistance.value = bo.point.distances
        }
        if (bn instanceof THREE.MeshBasicMaterial || bn instanceof THREE.MeshLambertMaterial || bn instanceof THREE.MeshPhongMaterial) {
            bi.diffuse.value = bn.color, bi.opacity.value = bn.opacity, (bi.map.texture = bn.map) && bi.offsetRepeat.value.set(bn.map.offset.x, bn.map.offset.y, bn.map.repeat.x, bn.map.repeat.y), bi.lightMap.texture = bn.lightMap, bi.envMap.texture = bn.envMap, bi.reflectivity.value = bn.reflectivity, bi.refractionRatio.value = bn.refractionRatio, bi.combine.value = bn.combine, bi.useRefract.value = bn.envMap && bn.envMap.mapping instanceof THREE.CubeRefractionMapping
        }
        if (bn instanceof THREE.LineBasicMaterial) {
            bi.diffuse.value = bn.color, bi.opacity.value = bn.opacity
        } else {
            if (bn instanceof THREE.ParticleBasicMaterial) {
                bi.psColor.value = bn.color, bi.opacity.value = bn.opacity, bi.size.value = bn.size, bi.scale.value = ap.height / 2, bi.map.texture = bn.map
            } else {
                if (bn instanceof THREE.MeshPhongMaterial) {
                    bi.ambient.value = bn.ambient, bi.specular.value = bn.specular, bi.shininess.value = bn.shininess
                } else {
                    if (bn instanceof THREE.MeshDepthMaterial) {
                        bi.mNear.value = bq.near, bi.mFar.value = bq.far, bi.opacity.value = bn.opacity
                    } else {
                        if (bn instanceof THREE.MeshNormalMaterial) {
                            bi.opacity.value = bn.opacity
                        }
                    }
                }
            }
        }
        if (bl.receiveShadow && !bn._shadowPass && bi.shadowMatrix) {
            for (bo = 0; bo < a4.length; bo++) {
                bi.shadowMatrix.value[bo] = a4[bo], bi.shadowMap.texture[bo] = aq.shadowMap[bo]
            }
            bi.shadowDarkness.value = aq.shadowMapDarkness;
            bi.shadowBias.value = aq.shadowMapBias
        }
        for (var I in bi) {
            if (bh = bk.uniforms[I]) {
                if (bp = bi[I], U = bp.type, bo = bp.value, U == "i") {
                    a6.uniform1i(bh, bo)
                } else {
                    if (U == "f") {
                        a6.uniform1f(bh, bo)
                    } else {
                        if (U == "v2") {
                            a6.uniform2f(bh, bo.x, bo.y)
                        } else {
                            if (U == "v3") {
                                a6.uniform3f(bh, bo.x, bo.y, bo.z)
                            } else {
                                if (U == "v4") {
                                    a6.uniform4f(bh, bo.x, bo.y, bo.z, bo.w)
                                } else {
                                    if (U == "c") {
                                        a6.uniform3f(bh, bo.r, bo.g, bo.b)
                                    } else {
                                        if (U == "fv1") {
                                            a6.uniform1fv(bh, bo)
                                        } else {
                                            if (U == "fv") {
                                                a6.uniform3fv(bh, bo)
                                            } else {
                                                if (U == "v3v") {
                                                    if (!bp._array) {
                                                        bp._array = new Float32Array(3 * bo.length)
                                                    }
                                                    U = 0;
                                                    for (R = bo.length; U < R; U++) {
                                                        O = U * 3, bp._array[O] = bo[U].x, bp._array[O + 1] = bo[U].y, bp._array[O + 2] = bo[U].z
                                                    }
                                                    a6.uniform3fv(bh, bp._array)
                                                } else {
                                                    if (U == "m4") {
                                                        if (!bp._array) {
                                                            bp._array = new Float32Array(16)
                                                        }
                                                        bo.flattenToArray(bp._array);
                                                        a6.uniformMatrix4fv(bh, !1, bp._array)
                                                    } else {
                                                        if (U == "m4v") {
                                                            if (!bp._array) {
                                                                bp._array = new Float32Array(16 * bo.length)
                                                            }
                                                            U = 0;
                                                            for (R = bo.length; U < R; U++) {
                                                                bo[U].flattenToArrayOffset(bp._array, U * 16)
                                                            }
                                                            a6.uniformMatrix4fv(bh, !1, bp._array)
                                                        } else {
                                                            if (U == "t") {
                                                                if (a6.uniform1i(bh, bo), bh = bp.texture) {
                                                                    if (bh.image instanceof Array && bh.image.length == 6) {
                                                                        if (bp = bh, bp.image.length == 6) {
                                                                            if (bp.needsUpdate) {
                                                                                if (!bp.image.__webglTextureCube) {
                                                                                    bp.image.__webglTextureCube = a6.createTexture()
                                                                                }
                                                                                a6.activeTexture(a6.TEXTURE0 + bo);
                                                                                a6.bindTexture(a6.TEXTURE_CUBE_MAP, bp.image.__webglTextureCube);
                                                                                for (bo = 0; bo < 6; bo++) {
                                                                                    a6.texImage2D(a6.TEXTURE_CUBE_MAP_POSITIVE_X + bo, 0, a6.RGBA, a6.RGBA, a6.UNSIGNED_BYTE, bp.image[bo])
                                                                                }
                                                                                ay(a6.TEXTURE_CUBE_MAP, bp, bp.image[0]);
                                                                                bp.needsUpdate = !1
                                                                            } else {
                                                                                a6.activeTexture(a6.TEXTURE0 + bo), a6.bindTexture(a6.TEXTURE_CUBE_MAP, bp.image.__webglTextureCube)
                                                                            }
                                                                        }
                                                                    } else {
                                                                        bh instanceof THREE.WebGLRenderTargetCube ? (bp = bh, a6.activeTexture(a6.TEXTURE0 + bo), a6.bindTexture(a6.TEXTURE_CUBE_MAP, bp.__webglTexture)) : aE(bh, bo)
                                                                    }
                                                                }
                                                            } else {
                                                                if (U == "tv") {
                                                                    if (!bp._array) {
                                                                        bp._array = [];
                                                                        U = 0;
                                                                        for (R = bp.texture.length; U < R; U++) {
                                                                            bp._array[U] = bo + U
                                                                        }
                                                                    }
                                                                    a6.uniform1iv(bh, bp._array);
                                                                    U = 0;
                                                                    for (R = bp.texture.length; U < R; U++) {
                                                                        (bh = bp.texture[U]) && aE(bh, bp._array[U])
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        a6.uniformMatrix4fv(bj.modelViewMatrix, !1, bl._modelViewMatrixArray);
        bj.normalMatrix && a6.uniformMatrix3fv(bj.normalMatrix, !1, bl._normalMatrixArray);
        (bn instanceof THREE.MeshShaderMaterial || bn instanceof THREE.MeshPhongMaterial || bn.envMap) && bj.cameraPosition !== null && a6.uniform3f(bj.cameraPosition, bq.position.x, bq.position.y, bq.position.z);
        (bn instanceof THREE.MeshShaderMaterial || bn.envMap || bn.skinning || bl.receiveShadow) && bj.objectMatrix !== null && a6.uniformMatrix4fv(bj.objectMatrix, !1, bl._objectMatrixArray);
        (bn instanceof THREE.MeshPhongMaterial || bn instanceof THREE.MeshLambertMaterial || bn instanceof THREE.MeshShaderMaterial || bn.skinning) && bj.viewMatrix !== null && a6.uniformMatrix4fv(bj.viewMatrix, !1, a1);
        bn.skinning && (a6.uniformMatrix4fv(bj.cameraInverseMatrix, !1, a1), a6.uniformMatrix4fv(bj.boneGlobalMatrices, !1, bl.boneMatrices));
        return bk
    }
    function bc(E, D, C, B, z, y) {
        if (B.opacity != 0) {
            var o, E = bd(E, D, C, B, y).attributes;
            if (!B.morphTargets && E.position >= 0) {
                a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglVertexBuffer), a6.vertexAttribPointer(E.position, 3, a6.FLOAT, !1, 0, 0)
            } else {
                if (y.morphTargetBase) {
                    D = B.program.attributes;
                    y.morphTargetBase !== -1 ? (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglMorphTargetsBuffers[y.morphTargetBase]), a6.vertexAttribPointer(D.position, 3, a6.FLOAT, !1, 0, 0)) : D.position >= 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglVertexBuffer), a6.vertexAttribPointer(D.position, 3, a6.FLOAT, !1, 0, 0));
                    if (y.morphTargetForcedOrder.length) {
                        for (var C = 0, e = y.morphTargetForcedOrder, K = y.morphTargetInfluences; C < B.numSupportedMorphTargets && C < e.length;) {
                            a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglMorphTargetsBuffers[e[C]]), a6.vertexAttribPointer(D["morphTarget" + C], 3, a6.FLOAT, !1, 0, 0), y.__webglMorphTargetInfluences[C] = K[e[C]], C++
                        }
                    } else {
                        var e = [],
                            I = -1,
                            H = 0,
                            K = y.morphTargetInfluences,
                            G, F = K.length,
                            C = 0;
                        for (y.morphTargetBase !== -1 && (e[y.morphTargetBase] = !0); C < B.numSupportedMorphTargets;) {
                            for (G = 0; G < F; G++) {
                                !e[G] && K[G] > I && (H = G, I = K[H])
                            }
                            a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglMorphTargetsBuffers[H]);
                            a6.vertexAttribPointer(D["morphTarget" + C], 3, a6.FLOAT, !1, 0, 0);
                            y.__webglMorphTargetInfluences[C] = I;
                            e[H] = 1;
                            I = -1;
                            C++
                        }
                    }
                    B.program.uniforms.morphTargetInfluences !== null && a6.uniform1fv(B.program.uniforms.morphTargetInfluences, y.__webglMorphTargetInfluences)
                }
            }
            if (z.__webglCustomAttributes) {
                for (o in z.__webglCustomAttributes) {
                    E[o] >= 0 && (D = z.__webglCustomAttributes[o], a6.bindBuffer(a6.ARRAY_BUFFER, D.buffer), a6.vertexAttribPointer(E[o], D.size, a6.FLOAT, !1, 0, 0))
                }
            }
            E.color >= 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglColorBuffer), a6.vertexAttribPointer(E.color, 3, a6.FLOAT, !1, 0, 0));
            E.normal >= 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglNormalBuffer), a6.vertexAttribPointer(E.normal, 3, a6.FLOAT, !1, 0, 0));
            E.tangent >= 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglTangentBuffer), a6.vertexAttribPointer(E.tangent, 4, a6.FLOAT, !1, 0, 0));
            E.uv >= 0 && (z.__webglUVBuffer ? (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglUVBuffer), a6.vertexAttribPointer(E.uv, 2, a6.FLOAT, !1, 0, 0), a6.enableVertexAttribArray(E.uv)) : a6.disableVertexAttribArray(E.uv));
            E.uv2 >= 0 && (z.__webglUV2Buffer ? (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglUV2Buffer), a6.vertexAttribPointer(E.uv2, 2, a6.FLOAT, !1, 0, 0), a6.enableVertexAttribArray(E.uv2)) : a6.disableVertexAttribArray(E.uv2));
            B.skinning && E.skinVertexA >= 0 && E.skinVertexB >= 0 && E.skinIndex >= 0 && E.skinWeight >= 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglSkinVertexABuffer), a6.vertexAttribPointer(E.skinVertexA, 4, a6.FLOAT, !1, 0, 0), a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglSkinVertexBBuffer), a6.vertexAttribPointer(E.skinVertexB, 4, a6.FLOAT, !1, 0, 0), a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglSkinIndicesBuffer), a6.vertexAttribPointer(E.skinIndex, 4, a6.FLOAT, !1, 0, 0), a6.bindBuffer(a6.ARRAY_BUFFER, z.__webglSkinWeightsBuffer), a6.vertexAttribPointer(E.skinWeight, 4, a6.FLOAT, !1, 0, 0));
            y instanceof THREE.Mesh ? (B.wireframe ? (a6.lineWidth(B.wireframeLinewidth), a6.bindBuffer(a6.ELEMENT_ARRAY_BUFFER, z.__webglLineBuffer), a6.drawElements(a6.LINES, z.__webglLineCount, a6.UNSIGNED_SHORT, 0)) : (a6.bindBuffer(a6.ELEMENT_ARRAY_BUFFER, z.__webglFaceBuffer), a6.drawElements(a6.TRIANGLES, z.__webglFaceCount, a6.UNSIGNED_SHORT, 0)), aq.data.vertices += z.__webglFaceCount, aq.data.faces += z.__webglFaceCount / 3, aq.data.drawCalls++) : y instanceof THREE.Line ? (y = y.type == THREE.LineStrip ? a6.LINE_STRIP : a6.LINES, a6.lineWidth(B.linewidth), a6.drawArrays(y, 0, z.__webglLineCount), aq.data.drawCalls++) : y instanceof THREE.ParticleSystem ? (a6.drawArrays(a6.POINTS, 0, z.__webglParticleCount), aq.data.drawCalls++) : y instanceof THREE.Ribbon && (a6.drawArrays(a6.TRIANGLE_STRIP, 0, z.__webglVertexCount), aq.data.drawCalls++)
        }
    }
    function bb(G, E, F) {
        if (!G.__webglVertexBuffer) {
            G.__webglVertexBuffer = a6.createBuffer()
        }
        if (!G.__webglNormalBuffer) {
            G.__webglNormalBuffer = a6.createBuffer()
        }
        G.hasPos && (a6.bindBuffer(a6.ARRAY_BUFFER, G.__webglVertexBuffer), a6.bufferData(a6.ARRAY_BUFFER, G.positionArray, a6.DYNAMIC_DRAW), a6.enableVertexAttribArray(E.attributes.position), a6.vertexAttribPointer(E.attributes.position, 3, a6.FLOAT, !1, 0, 0));
        if (G.hasNormal) {
            a6.bindBuffer(a6.ARRAY_BUFFER, G.__webglNormalBuffer);
            if (F == THREE.FlatShading) {
                var D, B, C, z, y, o, M, L, K, I, H = G.count * 3;
                for (I = 0; I < H; I += 9) {
                    F = G.normalArray, D = F[I], B = F[I + 1], C = F[I + 2], z = F[I + 3], o = F[I + 4], L = F[I + 5], y = F[I + 6], M = F[I + 7], K = F[I + 8], D = (D + z + y) / 3, B = (B + o + M) / 3, C = (C + L + K) / 3, F[I] = D, F[I + 1] = B, F[I + 2] = C, F[I + 3] = D, F[I + 4] = B, F[I + 5] = C, F[I + 6] = D, F[I + 7] = B, F[I + 8] = C
                }
            }
            a6.bufferData(a6.ARRAY_BUFFER, G.normalArray, a6.DYNAMIC_DRAW);
            a6.enableVertexAttribArray(E.attributes.normal);
            a6.vertexAttribPointer(E.attributes.normal, 3, a6.FLOAT, !1, 0, 0)
        }
        a6.drawArrays(a6.TRIANGLES, 0, G.count);
        G.count = 0
    }
    function a8(c) {
        if (aG != c.doubleSided) {
            c.doubleSided ? a6.disable(a6.CULL_FACE) : a6.enable(a6.CULL_FACE), aG = c.doubleSided
        }
        if (aK != c.flipSided) {
            c.flipSided ? a6.frontFace(a6.CW) : a6.frontFace(a6.CCW), aK = c.flipSided
        }
    }
    function a9(c) {
        aI != c && (c ? a6.enable(a6.DEPTH_TEST) : a6.disable(a6.DEPTH_TEST), aI = c)
    }
    function a7(f, h, k) {
        aH != f && (f ? a6.enable(a6.POLYGON_OFFSET_FILL) : a6.disable(a6.POLYGON_OFFSET_FILL), aH = f);
        if (f && (aP != h || aQ != k)) {
            a6.polygonOffset(h, k), aP = h, aQ = k
        }
    }
    function a0(c) {
        ag[0].set(c.n41 - c.n11, c.n42 - c.n12, c.n43 - c.n13, c.n44 - c.n14);
        ag[1].set(c.n41 + c.n11, c.n42 + c.n12, c.n43 + c.n13, c.n44 + c.n14);
        ag[2].set(c.n41 + c.n21, c.n42 + c.n22, c.n43 + c.n23, c.n44 + c.n24);
        ag[3].set(c.n41 - c.n21, c.n42 - c.n22, c.n43 - c.n23, c.n44 - c.n24);
        ag[4].set(c.n41 - c.n31, c.n42 - c.n32, c.n43 - c.n33, c.n44 - c.n34);
        ag[5].set(c.n41 + c.n31, c.n42 + c.n32, c.n43 + c.n33, c.n44 + c.n34);
        for (var f, c = 0; c < 6; c++) {
            f = ag[c], f.divideScalar(Math.sqrt(f.x * f.x + f.y * f.y + f.z * f.z))
        }
    }
    function a5(h) {
        for (var m = h.matrixWorld, n = -h.geometry.boundingSphere.radius * Math.max(h.scale.x, Math.max(h.scale.y, h.scale.z)), k = 0; k < 6; k++) {
            if (h = ag[k].x * m.n14 + ag[k].y * m.n24 + ag[k].z * m.n34 + ag[k].w, h <= n) {
                return !1
            }
        }
        return !0
    }
    function aY(c, f) {
        c.list[c.count] = f;
        c.count += 1
    }
    function a2(m) {
        var t, u, p = m.object,
            n = m.opaque,
            o = m.transparent;
        o.count = 0;
        m = n.count = 0;
        for (t = p.materials.length; m < t; m++) {
            u = p.materials[m], u.transparent ? aY(o, u) : aY(n, u)
        }
    }
    function aV(B) {
        var y, z, x, v, w = B.object,
            u = B.buffer,
            t = B.opaque,
            p = B.transparent;
        p.count = 0;
        B = t.count = 0;
        for (x = w.materials.length; B < x; B++) {
            if (y = w.materials[B], y instanceof THREE.MeshFaceMaterial) {
                y = 0;
                for (z = u.materials.length; y < z; y++) {
                    (v = u.materials[y]) && (v.transparent ? aY(p, v) : aY(t, v))
                }
            } else {
                (v = y) && (v.transparent ? aY(p, v) : aY(t, v))
            }
        }
    }
    function aW(c, f) {
        return f.z - c.z
    }
    function aT(o, h) {
        var f, E, B, u = 0,
            p, k, m, e, C = o.lights;
        aj || (aj = new THREE.Camera(aq.shadowCameraFov, h.aspect, aq.shadowCameraNear, aq.shadowCameraFar));
        f = 0;
        for (E = C.length; f < E; f++) {
            if (B = C[f], B instanceof THREE.SpotLight && B.castShadow) {
                aq.shadowMap[u] || (aq.shadowMap[u] = new THREE.WebGLRenderTarget(aq.shadowMapWidth, aq.shadowMapHeight, {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat
                }));
                a4[u] || (a4[u] = new THREE.Matrix4);
                p = aq.shadowMap[u];
                k = a4[u];
                aj.position.copy(B.position);
                aj.target.position.copy(B.target.position);
                aj.update(void 0, !0);
                o.update(void 0, !1, aj);
                k.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
                k.multiplySelf(aj.projectionMatrix);
                k.multiplySelf(aj.matrixWorldInverse);
                aj.matrixWorldInverse.flattenToArray(a1);
                aj.projectionMatrix.flattenToArray(aN);
                aL.multiply(aj.projectionMatrix, aj.matrixWorldInverse);
                a0(aL);
                aq.initWebGLObjects(o);
                ax(p);
                a6.clearColor(1, 1, 1, 1);
                aq.clear();
                a6.clearColor(av.r, av.g, av.b, Q);
                k = o.__webglObjects.length;
                B = o.__webglObjectsImmediate.length;
                for (p = 0; p < k; p++) {
                    m = o.__webglObjects[p], e = m.object, e.visible && e.castShadow ? !(e instanceof THREE.Mesh) || !e.frustumCulled || a5(e) ? (e.matrixWorld.flattenToArray(e._objectMatrixArray), aF(e, aj, !1), m.render = !0) : m.render = !1 : m.render = !1
                }
                a9(!0);
                aB(THREE.NormalBlending);
                for (p = 0; p < k; p++) {
                    if (m = o.__webglObjects[p], m.render) {
                        e = m.object, buffer = m.buffer, a8(e), m = e.customDepthMaterial ? e.customDepthMaterial : e.geometry.morphTargets.length ? aO : ac, bc(aj, C, null, m, buffer, e)
                    }
                }
                for (p = 0; p < B; p++) {
                    m = o.__webglObjectsImmediate[p], e = m.object, e.visible && e.castShadow && (e.matrixAutoUpdate && e.matrixWorld.flattenToArray(e._objectMatrixArray), aF(e, aj, !1), a8(e), program = bd(aj, C, null, ac, e), e.render(function (c) {
                        bb(c, program, ac.shading)
                    }))
                }
                u++
            }
        }
    }
    function aU(E, C) {
        var D, B, y;
        D = ab.attributes;
        var z = ab.uniforms,
            x = ah / A,
            w, o = [],
            H = A * 0.5,
            G = ah * 0.5,
            F = !0;
        a6.useProgram(ab.program);
        ae = ab.program;
        aI = aR = -1;
        a3 || (a6.enableVertexAttribArray(ab.attributes.position), a6.enableVertexAttribArray(ab.attributes.uv), a3 = !0);
        a6.disable(a6.CULL_FACE);
        a6.enable(a6.BLEND);
        a6.depthMask(!0);
        a6.bindBuffer(a6.ARRAY_BUFFER, ab.vertexBuffer);
        a6.vertexAttribPointer(D.position, 2, a6.FLOAT, !1, 16, 0);
        a6.vertexAttribPointer(D.uv, 2, a6.FLOAT, !1, 16, 8);
        a6.bindBuffer(a6.ELEMENT_ARRAY_BUFFER, ab.elementBuffer);
        a6.uniformMatrix4fv(z.projectionMatrix, !1, aN);
        a6.activeTexture(a6.TEXTURE0);
        a6.uniform1i(z.map, 0);
        D = 0;
        for (B = E.__webglSprites.length; D < B; D++) {
            y = E.__webglSprites[D], y.useScreenCoordinates ? y.z = -y.position.z : (y._modelViewMatrix.multiplyToArray(C.matrixWorldInverse, y.matrixWorld, y._modelViewMatrixArray), y.z = -y._modelViewMatrix.n34)
        }
        E.__webglSprites.sort(aW);
        D = 0;
        for (B = E.__webglSprites.length; D < B; D++) {
            y = E.__webglSprites[D], y.material === void 0 && y.map && y.map.image && y.map.image.width && (y.useScreenCoordinates ? (a6.uniform1i(z.useScreenCoordinates, 1), a6.uniform3f(z.screenPosition, (y.position.x - H) / H, (G - y.position.y) / G, Math.max(0, Math.min(1, y.position.z)))) : (a6.uniform1i(z.useScreenCoordinates, 0), a6.uniform1i(z.affectedByDistance, y.affectedByDistance ? 1 : 0), a6.uniformMatrix4fv(z.modelViewMatrix, !1, y._modelViewMatrixArray)), w = y.map.image.width / (y.scaleByViewport ? ah : 1), o[0] = w * x * y.scale.x, o[1] = w * y.scale.y, a6.uniform2f(z.uvScale, y.uvScale.x, y.uvScale.y), a6.uniform2f(z.uvOffset, y.uvOffset.x, y.uvOffset.y), a6.uniform2f(z.alignment, y.alignment.x, y.alignment.y), a6.uniform1f(z.opacity, y.opacity), a6.uniform1f(z.rotation, y.rotation), a6.uniform2fv(z.scale, o), y.mergeWith3D && !F ? (a6.enable(a6.DEPTH_TEST), F = !0) : !y.mergeWith3D && F && (a6.disable(a6.DEPTH_TEST), F = !1), aB(y.blending), aE(y.map, 0), a6.drawElements(a6.TRIANGLES, 6, a6.UNSIGNED_SHORT, 0))
        }
        a6.enable(a6.CULL_FACE);
        a6.enable(a6.DEPTH_TEST);
        a6.depthMask(aS)
    }
    function aF(f, h, k) {
        f._modelViewMatrix.multiplyToArray(h.matrixWorldInverse, f.matrixWorld, f._modelViewMatrixArray);
        k && THREE.Matrix4.makeInvert3x3(f._modelViewMatrix).transposeIntoArray(f._normalMatrixArray)
    }
    function aD(h) {
        var o, p, n, m;
        m = h.__materials;
        h = 0;
        for (p = m.length; h < p; h++) {
            if (n = m[h], n.attributes) {
                for (o in n.attributes) {
                    if (n.attributes[o].needsUpdate) {
                        return !0
                    }
                }
            }
        }
        return !1
    }
    function aA(h) {
        var o, p, n, m;
        m = h.__materials;
        h = 0;
        for (p = m.length; h < p; h++) {
            if (n = m[h], n.attributes) {
                for (o in n.attributes) {
                    n.attributes[o].needsUpdate = !1
                }
            }
        }
    }
    function az(f, h) {
        var k;
        for (k = f.length - 1; k >= 0; k--) {
            f[k].object == h && f.splice(k, 1)
        }
    }
    function aC(G) {
        function E(c) {
            var e = [];
            F = 0;
            for (D = c.length; F < D; F++) {
                c[F] == void 0 ? e.push("undefined") : e.push(c[F].id)
            }
            return e.join("_")
        }
        var F, D, B, C, z, y, x, w, K = {}, I = G.morphTargets !== void 0 ? G.morphTargets.length : 0;
        G.geometryGroups = {};
        B = 0;
        for (C = G.faces.length; B < C; B++) {
            z = G.faces[B], y = z.materials, x = E(y), K[x] == void 0 && (K[x] = {
                hash: x,
                counter: 0
            }), w = K[x].hash + "_" + K[x].counter, G.geometryGroups[w] == void 0 && (G.geometryGroups[w] = {
                faces: [],
                materials: y,
                vertices: 0,
                numMorphTargets: I
            }), z = z instanceof THREE.Face3 ? 3 : 4, G.geometryGroups[w].vertices + z > 65535 && (K[x].counter += 1, w = K[x].hash + "_" + K[x].counter, G.geometryGroups[w] == void 0 && (G.geometryGroups[w] = {
                faces: [],
                materials: y,
                vertices: 0,
                numMorphTargets: I
            })), G.geometryGroups[w].faces.push(B), G.geometryGroups[w].vertices += z
        }
        G.geometryGroupsList = [];
        for (var H in G.geometryGroups) {
            G.geometryGroupsList.push(G.geometryGroups[H])
        }
    }
    function au(f, h, k) {
        f.push({
            buffer: h,
            object: k,
            opaque: {
                list: [],
                count: 0
            },
            transparent: {
                list: [],
                count: 0
            }
        })
    }
    function aB(c) {
        if (c != aR) {
            switch (c) {
                case THREE.AdditiveBlending:
                    a6.blendEquation(a6.FUNC_ADD);
                    a6.blendFunc(a6.SRC_ALPHA, a6.ONE);
                    break;
                case THREE.SubtractiveBlending:
                    a6.blendEquation(a6.FUNC_ADD);
                    a6.blendFunc(a6.ZERO, a6.ONE_MINUS_SRC_COLOR);
                    break;
                case THREE.MultiplyBlending:
                    a6.blendEquation(a6.FUNC_ADD);
                    a6.blendFunc(a6.ZERO, a6.SRC_COLOR);
                    break;
                default:
                    a6.blendEquationSeparate(a6.FUNC_ADD, a6.FUNC_ADD), a6.blendFuncSeparate(a6.SRC_ALPHA, a6.ONE_MINUS_SRC_ALPHA, a6.ONE, a6.ONE_MINUS_SRC_ALPHA)
            }
            aR = c
        }
    }
    function ay(f, h, k) {
        (k.width & k.width - 1) == 0 && (k.height & k.height - 1) == 0 ? (a6.texParameteri(f, a6.TEXTURE_WRAP_S, am(h.wrapS)), a6.texParameteri(f, a6.TEXTURE_WRAP_T, am(h.wrapT)), a6.texParameteri(f, a6.TEXTURE_MAG_FILTER, am(h.magFilter)), a6.texParameteri(f, a6.TEXTURE_MIN_FILTER, am(h.minFilter)), a6.generateMipmap(f)) : (a6.texParameteri(f, a6.TEXTURE_WRAP_S, a6.CLAMP_TO_EDGE), a6.texParameteri(f, a6.TEXTURE_WRAP_T, a6.CLAMP_TO_EDGE), a6.texParameteri(f, a6.TEXTURE_MAG_FILTER, at(h.magFilter)), a6.texParameteri(f, a6.TEXTURE_MIN_FILTER, at(h.minFilter)))
    }
    function aE(c, f) {
        if (c.needsUpdate) {
            if (!c.__webglInit) {
                c.__webglInit = !0, c.__webglTexture = a6.createTexture()
            }
            a6.activeTexture(a6.TEXTURE0 + f);
            a6.bindTexture(a6.TEXTURE_2D, c.__webglTexture);
            c instanceof THREE.DataTexture ? a6.texImage2D(a6.TEXTURE_2D, 0, am(c.format), c.image.width, c.image.height, 0, am(c.format), a6.UNSIGNED_BYTE, c.image.data) : a6.texImage2D(a6.TEXTURE_2D, 0, a6.RGBA, a6.RGBA, a6.UNSIGNED_BYTE, c.image);
            ay(a6.TEXTURE_2D, c, c.image);
            c.needsUpdate = !1
        } else {
            a6.activeTexture(a6.TEXTURE0 + f), a6.bindTexture(a6.TEXTURE_2D, c.__webglTexture)
        }
    }
    function ax(h) {
        var o = h instanceof THREE.WebGLRenderTargetCube;
        if (h && !h.__webglFramebuffer) {
            if (h.depthBuffer === void 0) {
                h.depthBuffer = !0
            }
            if (h.stencilBuffer === void 0) {
                h.stencilBuffer = !0
            }
            h.__webglRenderbuffer = a6.createRenderbuffer();
            h.__webglTexture = a6.createTexture();
            if (o) {
                a6.bindTexture(a6.TEXTURE_CUBE_MAP, h.__webglTexture);
                ay(a6.TEXTURE_CUBE_MAP, h, h);
                h.__webglFramebuffer = [];
                for (var p = 0; p < 6; p++) {
                    h.__webglFramebuffer[p] = a6.createFramebuffer(), a6.texImage2D(a6.TEXTURE_CUBE_MAP_POSITIVE_X + p, 0, am(h.format), h.width, h.height, 0, am(h.format), am(h.type), null)
                }
            } else {
                h.__webglFramebuffer = a6.createFramebuffer(), a6.bindTexture(a6.TEXTURE_2D, h.__webglTexture), ay(a6.TEXTURE_2D, h, h), a6.texImage2D(a6.TEXTURE_2D, 0, am(h.format), h.width, h.height, 0, am(h.format), am(h.type), null)
            }
            a6.bindRenderbuffer(a6.RENDERBUFFER, h.__webglRenderbuffer);
            if (o) {
                for (p = 0; p < 6; ++p) {
                    a6.bindFramebuffer(a6.FRAMEBUFFER, h.__webglFramebuffer[p]), a6.framebufferTexture2D(a6.FRAMEBUFFER, a6.COLOR_ATTACHMENT0, a6.TEXTURE_CUBE_MAP_POSITIVE_X + p, h.__webglTexture, 0)
                }
            } else {
                a6.bindFramebuffer(a6.FRAMEBUFFER, h.__webglFramebuffer), a6.framebufferTexture2D(a6.FRAMEBUFFER, a6.COLOR_ATTACHMENT0, a6.TEXTURE_2D, h.__webglTexture, 0)
            }
            h.depthBuffer && !h.stencilBuffer ? (a6.renderbufferStorage(a6.RENDERBUFFER, a6.DEPTH_COMPONENT16, h.width, h.height), a6.framebufferRenderbuffer(a6.FRAMEBUFFER, a6.DEPTH_ATTACHMENT, a6.RENDERBUFFER, h.__webglRenderbuffer)) : h.depthBuffer && h.stencilBuffer ? (a6.renderbufferStorage(a6.RENDERBUFFER, a6.DEPTH_STENCIL, h.width, h.height), a6.framebufferRenderbuffer(a6.FRAMEBUFFER, a6.DEPTH_STENCIL_ATTACHMENT, a6.RENDERBUFFER, h.__webglRenderbuffer)) : a6.renderbufferStorage(a6.RENDERBUFFER, a6.RGBA4, h.width, h.height);
            o ? a6.bindTexture(a6.TEXTURE_CUBE_MAP, null) : a6.bindTexture(a6.TEXTURE_2D, null);
            a6.bindRenderbuffer(a6.RENDERBUFFER, null);
            a6.bindFramebuffer(a6.FRAMEBUFFER, null)
        }
        var n, m;
        h ? (o = o ? h.__webglFramebuffer[h.activeCubeFace] : h.__webglFramebuffer, p = h.width, h = h.height, m = n = 0) : (o = null, p = A, h = ah, n = ad, m = aJ);
        o != ao && (a6.bindFramebuffer(a6.FRAMEBUFFER, o), a6.viewport(n, m, p, h), ao = o)
    }
    function ai(c) {
        c instanceof THREE.WebGLRenderTargetCube ? (a6.bindTexture(a6.TEXTURE_CUBE_MAP, c.__webglTexture), a6.generateMipmap(a6.TEXTURE_CUBE_MAP), a6.bindTexture(a6.TEXTURE_CUBE_MAP, null)) : (a6.bindTexture(a6.TEXTURE_2D, c.__webglTexture), a6.generateMipmap(a6.TEXTURE_2D), a6.bindTexture(a6.TEXTURE_2D, null))
    }
    function aw(f, h) {
        var k;
        f == "fragment" ? k = a6.createShader(a6.FRAGMENT_SHADER) : f == "vertex" && (k = a6.createShader(a6.VERTEX_SHADER));
        a6.shaderSource(k, h);
        a6.compileShader(k);
        if (!a6.getShaderParameter(k, a6.COMPILE_STATUS)) {
            return console.error(a6.getShaderInfoLog(k)), console.error(h), null
        }
        return k
    }
    function at(c) {
        switch (c) {
            case THREE.NearestFilter:
            case THREE.NearestMipMapNearestFilter:
            case THREE.NearestMipMapLinearFilter:
                return a6.NEAREST;
            default:
                return a6.LINEAR
        }
    }
    function am(c) {
        switch (c) {
            case THREE.RepeatWrapping:
                return a6.REPEAT;
            case THREE.ClampToEdgeWrapping:
                return a6.CLAMP_TO_EDGE;
            case THREE.MirroredRepeatWrapping:
                return a6.MIRRORED_REPEAT;
            case THREE.NearestFilter:
                return a6.NEAREST;
            case THREE.NearestMipMapNearestFilter:
                return a6.NEAREST_MIPMAP_NEAREST;
            case THREE.NearestMipMapLinearFilter:
                return a6.NEAREST_MIPMAP_LINEAR;
            case THREE.LinearFilter:
                return a6.LINEAR;
            case THREE.LinearMipMapNearestFilter:
                return a6.LINEAR_MIPMAP_NEAREST;
            case THREE.LinearMipMapLinearFilter:
                return a6.LINEAR_MIPMAP_LINEAR;
            case THREE.ByteType:
                return a6.BYTE;
            case THREE.UnsignedByteType:
                return a6.UNSIGNED_BYTE;
            case THREE.ShortType:
                return a6.SHORT;
            case THREE.UnsignedShortType:
                return a6.UNSIGNED_SHORT;
            case THREE.IntType:
                return a6.INT;
            case THREE.UnsignedShortType:
                return a6.UNSIGNED_INT;
            case THREE.FloatType:
                return a6.FLOAT;
            case THREE.AlphaFormat:
                return a6.ALPHA;
            case THREE.RGBFormat:
                return a6.RGB;
            case THREE.RGBAFormat:
                return a6.RGBA;
            case THREE.LuminanceFormat:
                return a6.LUMINANCE;
            case THREE.LuminanceAlphaFormat:
                return a6.LUMINANCE_ALPHA
        }
        return 0
    }
    var aq = this,
        a6, af = [],
        ae = null,
        ao = null,
        aS = !0,
        aG = null,
        aK = null,
        aR = null,
        aI = null,
        aH = null,
        aP = null,
        aQ = null,
        ad = 0,
        aJ = 0,
        A = 0,
        ah = 0,
        ag = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
        aL = new THREE.Matrix4,
        aN = new Float32Array(16),
        a1 = new Float32Array(16),
        aM = new THREE.Vector4,
        ak = {
            ambient: [0, 0, 0],
            directional: {
                length: 0,
                colors: [],
                positions: []
            },
            point: {
                length: 0,
                colors: [],
                positions: [],
                distances: []
            }
        }, bf = bf || {}, ap = bf.canvas !== void 0 ? bf.canvas : document.createElement("canvas"),
        aZ = bf.stencil !== void 0 ? bf.stencil : !0,
        ar = bf.preserveDrawingBuffer !== void 0 ? bf.preserveDrawingBuffer : !1,
        an = bf.antialias !== void 0 ? bf.antialias : !1,
        av = bf.clearColor !== void 0 ? new THREE.Color(bf.clearColor) : new THREE.Color(0),
        Q = bf.clearAlpha !== void 0 ? bf.clearAlpha : 0;
    _maxLights = bf.maxLights !== void 0 ? bf.maxLights : 4;
    this.data = {
        vertices: 0,
        faces: 0,
        drawCalls: 0
    };
    this.maxMorphTargets = 8;
    this.domElement = ap;
    this.sortObjects = this.autoClear = !0;
    this.shadowMapBias = 0.0039;
    this.shadowMapDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowCameraNear = 1;
    this.shadowCameraFar = 5000;
    this.shadowCameraFov = 50;
    this.shadowMap = [];
    this.shadowMapEnabled = !1;
    this.shadowMapSoft = !0;
    var aj, a4 = [],
        bf = THREE.ShaderLib.depthRGBA,
        J = THREE.UniformsUtils.clone(bf.uniforms),
        ac = new THREE.MeshShaderMaterial({
            fragmentShader: bf.fragmentShader,
            vertexShader: bf.vertexShader,
            uniforms: J
        }),
        aO = new THREE.MeshShaderMaterial({
            fragmentShader: bf.fragmentShader,
            vertexShader: bf.vertexShader,
            uniforms: J,
            morphTargets: !0
        });
    ac._shadowPass = !0;
    aO._shadowPass = !0;
    try {
        if (!(a6 = ap.getContext("experimental-webgl", {
            antialias: an,
            stencil: aZ,
            preserveDrawingBuffer: ar
        }))) {
            throw "Error creating WebGL context."
        }
        console.log(navigator.userAgent + " | " + a6.getParameter(a6.VERSION) + " | " + a6.getParameter(a6.VENDOR) + " | " + a6.getParameter(a6.RENDERER) + " | " + a6.getParameter(a6.SHADING_LANGUAGE_VERSION))
    } catch (al) {
        console.error(al)
    }
    a6.clearColor(0, 0, 0, 1);
    a6.clearDepth(1);
    a6.clearStencil(0);
    a6.enable(a6.DEPTH_TEST);
    a6.depthFunc(a6.LEQUAL);
    a6.frontFace(a6.CCW);
    a6.cullFace(a6.BACK);
    a6.enable(a6.CULL_FACE);
    a6.enable(a6.BLEND);
    a6.blendEquation(a6.FUNC_ADD);
    a6.blendFunc(a6.SRC_ALPHA, a6.ONE_MINUS_SRC_ALPHA);
    a6.clearColor(av.r, av.g, av.b, Q);
    this.context = a6;
    var aX = a6.getParameter(a6.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0,
        ab = {};
    ab.vertices = new Float32Array(16);
    ab.faces = new Uint16Array(6);
    i = 0;
    ab.vertices[i++] = -1;
    ab.vertices[i++] = -1;
    ab.vertices[i++] = 0;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = -1;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = 0;
    ab.vertices[i++] = -1;
    ab.vertices[i++] = 1;
    ab.vertices[i++] = 0;
    i = ab.vertices[i++] = 0;
    ab.faces[i++] = 0;
    ab.faces[i++] = 1;
    ab.faces[i++] = 2;
    ab.faces[i++] = 0;
    ab.faces[i++] = 2;
    ab.faces[i++] = 3;
    ab.vertexBuffer = a6.createBuffer();
    ab.elementBuffer = a6.createBuffer();
    a6.bindBuffer(a6.ARRAY_BUFFER, ab.vertexBuffer);
    a6.bufferData(a6.ARRAY_BUFFER, ab.vertices, a6.STATIC_DRAW);
    a6.bindBuffer(a6.ELEMENT_ARRAY_BUFFER, ab.elementBuffer);
    a6.bufferData(a6.ELEMENT_ARRAY_BUFFER, ab.faces, a6.STATIC_DRAW);
    ab.program = a6.createProgram();
    a6.attachShader(ab.program, aw("fragment", THREE.ShaderLib.sprite.fragmentShader));
    a6.attachShader(ab.program, aw("vertex", THREE.ShaderLib.sprite.vertexShader));
    a6.linkProgram(ab.program);
    ab.attributes = {};
    ab.uniforms = {};
    ab.attributes.position = a6.getAttribLocation(ab.program, "position");
    ab.attributes.uv = a6.getAttribLocation(ab.program, "uv");
    ab.uniforms.uvOffset = a6.getUniformLocation(ab.program, "uvOffset");
    ab.uniforms.uvScale = a6.getUniformLocation(ab.program, "uvScale");
    ab.uniforms.rotation = a6.getUniformLocation(ab.program, "rotation");
    ab.uniforms.scale = a6.getUniformLocation(ab.program, "scale");
    ab.uniforms.alignment = a6.getUniformLocation(ab.program, "alignment");
    ab.uniforms.map = a6.getUniformLocation(ab.program, "map");
    ab.uniforms.opacity = a6.getUniformLocation(ab.program, "opacity");
    ab.uniforms.useScreenCoordinates = a6.getUniformLocation(ab.program, "useScreenCoordinates");
    ab.uniforms.affectedByDistance = a6.getUniformLocation(ab.program, "affectedByDistance");
    ab.uniforms.screenPosition = a6.getUniformLocation(ab.program, "screenPosition");
    ab.uniforms.modelViewMatrix = a6.getUniformLocation(ab.program, "modelViewMatrix");
    ab.uniforms.projectionMatrix = a6.getUniformLocation(ab.program, "projectionMatrix");
    var a3 = !1;
    this.setSize = function (c, f) {
        ap.width = c;
        ap.height = f;
        this.setViewport(0, 0, ap.width, ap.height)
    };
    this.setViewport = function (h, m, n, k) {
        ad = h;
        aJ = m;
        A = n;
        ah = k;
        a6.viewport(ad, aJ, A, ah)
    };
    this.setScissor = function (h, m, n, k) {
        a6.scissor(h, m, n, k)
    };
    this.enableScissorTest = function (c) {
        c ? a6.enable(a6.SCISSOR_TEST) : a6.disable(a6.SCISSOR_TEST)
    };
    this.enableDepthBufferWrite = function (c) {
        aS = c;
        a6.depthMask(c)
    };
    this.setClearColorHex = function (c, f) {
        av.setHex(c);
        Q = f;
        a6.clearColor(av.r, av.g, av.b, Q)
    };
    this.setClearColor = function (c, f) {
        av.copy(c);
        Q = f;
        a6.clearColor(av.r, av.g, av.b, Q)
    };
    this.clear = function () {
        a6.clear(a6.COLOR_BUFFER_BIT | a6.DEPTH_BUFFER_BIT | a6.STENCIL_BUFFER_BIT)
    };
    this.getContext = function () {
        return a6
    };
    this.deallocateObject = function (h) {
        if (h.__webglInit) {
            if (h.__webglInit = !1, delete h._modelViewMatrix, delete h._normalMatrixArray, delete h._modelViewMatrixArray, delete h._objectMatrixArray, h instanceof THREE.Mesh) {
                for (g in h.geometry.geometryGroups) {
                    var m = h.geometry.geometryGroups[g];
                    a6.deleteBuffer(m.__webglVertexBuffer);
                    a6.deleteBuffer(m.__webglNormalBuffer);
                    a6.deleteBuffer(m.__webglTangentBuffer);
                    a6.deleteBuffer(m.__webglColorBuffer);
                    a6.deleteBuffer(m.__webglUVBuffer);
                    a6.deleteBuffer(m.__webglUV2Buffer);
                    a6.deleteBuffer(m.__webglSkinVertexABuffer);
                    a6.deleteBuffer(m.__webglSkinVertexBBuffer);
                    a6.deleteBuffer(m.__webglSkinIndicesBuffer);
                    a6.deleteBuffer(m.__webglSkinWeightsBuffer);
                    a6.deleteBuffer(m.__webglFaceBuffer);
                    a6.deleteBuffer(m.__webglLineBuffer);
                    if (m.numMorphTargets) {
                        for (var n = 0, k = m.numMorphTargets; n < k; n++) {
                            a6.deleteBuffer(m.__webglMorphTargetsBuffers[n])
                        }
                    }
                }
            } else {
                if (h instanceof THREE.Ribbon) {
                    h = h.geometry, a6.deleteBuffer(h.__webglVertexBuffer), a6.deleteBuffer(h.__webglColorBuffer)
                } else {
                    if (h instanceof THREE.Line) {
                        h = h.geometry, a6.deleteBuffer(h.__webglVertexBuffer), a6.deleteBuffer(h.__webglColorBuffer)
                    } else {
                        if (h instanceof THREE.ParticleSystem) {
                            h = h.geometry, a6.deleteBuffer(h.__webglVertexBuffer), a6.deleteBuffer(h.__webglColorBuffer)
                        }
                    }
                }
            }
        }
    };
    this.deallocateTexture = function (c) {
        if (c.__webglInit) {
            c.__webglInit = !1, a6.deleteTexture(c.__webglTexture)
        }
    };
    this.initMaterial = function (H, E, G, D) {
        var B, C, z;
        H instanceof THREE.MeshDepthMaterial ? z = "depth" : H instanceof THREE.MeshNormalMaterial ? z = "normal" : H instanceof THREE.MeshBasicMaterial ? z = "basic" : H instanceof THREE.MeshLambertMaterial ? z = "lambert" : H instanceof THREE.MeshPhongMaterial ? z = "phong" : H instanceof THREE.LineBasicMaterial ? z = "basic" : H instanceof THREE.ParticleBasicMaterial && (z = "particle_basic");
        if (z) {
            var y = THREE.ShaderLib[z];
            H.uniforms = THREE.UniformsUtils.clone(y.uniforms);
            H.vertexShader = y.vertexShader;
            H.fragmentShader = y.fragmentShader
        }
        var o, O, N;
        o = N = y = 0;
        for (O = E.length; o < O; o++) {
            C = E[o], C instanceof THREE.SpotLight && N++, C instanceof THREE.DirectionalLight && N++, C instanceof THREE.PointLight && y++
        }
        y + N <= _maxLights ? o = N : (o = Math.ceil(_maxLights * N / (y + N)), y = _maxLights - o);
        C = {
            directional: o,
            point: y
        };
        y = N = 0;
        for (o = E.length; y < o; y++) {
            O = E[y], O instanceof THREE.SpotLight && O.castShadow && N++
        }
        var L = 50;
        if (D !== void 0 && D instanceof THREE.SkinnedMesh) {
            L = D.bones.length
        }
        var K;
        a: {
            o = H.fragmentShader;
            O = H.vertexShader;
            var y = H.uniforms,
                E = H.attributes,
                G = {
                    map: !! H.map,
                    envMap: !! H.envMap,
                    lightMap: !! H.lightMap,
                    vertexColors: H.vertexColors,
                    fog: G,
                    sizeAttenuation: H.sizeAttenuation,
                    skinning: H.skinning,
                    morphTargets: H.morphTargets,
                    maxMorphTargets: this.maxMorphTargets,
                    maxDirLights: C.directional,
                    maxPointLights: C.point,
                    maxBones: L,
                    shadowMapEnabled: this.shadowMapEnabled && D.receiveShadow,
                    shadowMapSoft: this.shadowMapSoft,
                    shadowMapWidth: this.shadowMapWidth,
                    shadowMapHeight: this.shadowMapHeight,
                    maxShadows: N,
                    alphaTest: H.alphaTest
                }, I, D = [];
            z ? D.push(z) : (D.push(o), D.push(O));
            for (I in G) {
                D.push(I), D.push(G[I])
            }
            z = D.join();
            I = 0;
            for (D = af.length; I < D; I++) {
                if (af[I].code == z) {
                    K = af[I].program;
                    break a
                }
            }
            I = a6.createProgram();
            D = [aX ? "#define VERTEX_TEXTURES" : "", "#define MAX_DIR_LIGHTS " + G.maxDirLights, "#define MAX_POINT_LIGHTS " + G.maxPointLights, "#define MAX_SHADOWS " + G.maxShadows, "#define MAX_BONES " + G.maxBones, G.map ? "#define USE_MAP" : "", G.envMap ? "#define USE_ENVMAP" : "", G.lightMap ? "#define USE_LIGHTMAP" : "", G.vertexColors ? "#define USE_COLOR" : "", G.skinning ? "#define USE_SKINNING" : "", G.morphTargets ? "#define USE_MORPHTARGETS" : "", G.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", G.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", G.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
            C = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + G.maxDirLights, "#define MAX_POINT_LIGHTS " + G.maxPointLights, "#define MAX_SHADOWS " + G.maxShadows, G.alphaTest ? "#define ALPHATEST " + G.alphaTest : "", G.fog ? "#define USE_FOG" : "", G.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", G.map ? "#define USE_MAP" : "", G.envMap ? "#define USE_ENVMAP" : "", G.lightMap ? "#define USE_LIGHTMAP" : "", G.vertexColors ? "#define USE_COLOR" : "", G.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", G.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", G.shadowMapSoft ? "#define SHADOWMAP_WIDTH " + G.shadowMapWidth.toFixed(1) : "", G.shadowMapSoft ? "#define SHADOWMAP_HEIGHT " + G.shadowMapHeight.toFixed(1) : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
            a6.attachShader(I, aw("fragment", C + o));
            a6.attachShader(I, aw("vertex", D + O));
            a6.linkProgram(I);
            a6.getProgramParameter(I, a6.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + a6.getProgramParameter(I, a6.VALIDATE_STATUS) + ", gl error [" + a6.getError() + "]");
            I.uniforms = {};
            I.attributes = {};
            var F, D = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition", "cameraInverseMatrix", "boneGlobalMatrices", "morphTargetInfluences"];
            for (F in y) {
                D.push(F)
            }
            F = D;
            D = 0;
            for (y = F.length; D < y; D++) {
                o = F[D], I.uniforms[o] = a6.getUniformLocation(I, o)
            }
            D = ["position", "normal", "uv", "uv2", "tangent", "color", "skinVertexA", "skinVertexB", "skinIndex", "skinWeight"];
            for (F = 0; F < G.maxMorphTargets; F++) {
                D.push("morphTarget" + F)
            }
            for (K in E) {
                D.push(K)
            }
            K = D;
            F = 0;
            for (E = K.length; F < E; F++) {
                G = K[F], I.attributes[G] = a6.getAttribLocation(I, G)
            }
            af.push({
                program: I,
                code: z
            });
            K = I
        }
        H.program = K;
        K = H.program.attributes;
        K.position >= 0 && a6.enableVertexAttribArray(K.position);
        K.color >= 0 && a6.enableVertexAttribArray(K.color);
        K.normal >= 0 && a6.enableVertexAttribArray(K.normal);
        K.tangent >= 0 && a6.enableVertexAttribArray(K.tangent);
        H.skinning && K.skinVertexA >= 0 && K.skinVertexB >= 0 && K.skinIndex >= 0 && K.skinWeight >= 0 && (a6.enableVertexAttribArray(K.skinVertexA), a6.enableVertexAttribArray(K.skinVertexB), a6.enableVertexAttribArray(K.skinIndex), a6.enableVertexAttribArray(K.skinWeight));
        if (H.attributes) {
            for (B in H.attributes) {
                K[B] !== void 0 && K[B] >= 0 && a6.enableVertexAttribArray(K[B])
            }
        }
        if (H.morphTargets) {
            for (B = H.numSupportedMorphTargets = 0; B < this.maxMorphTargets; B++) {
                F = "morphTarget" + B, K[F] >= 0 && (a6.enableVertexAttribArray(K[F]), H.numSupportedMorphTargets++)
            }
        }
    };
    this.clearTarget = function (h, n, m, k) {
        ax(h);
        h = 0;
        n && (h |= a6.COLOR_BUFFER_BIT);
        m && (h |= a6.DEPTH_BUFFER_BIT);
        k && (h |= a6.STENCIL_BUFFER_BIT);
        a6.clear(h)
    };
    this.render = function (w, u, k, y) {
        var t, n, e, h, z, x, B, m, p = w.lights,
            f = w.fog;
        this.shadowMapEnabled && aT(w, u);
        aq.data.vertices = 0;
        aq.data.faces = 0;
        aq.data.drawCalls = 0;
        u.matrixAutoUpdate && u.update(void 0, !0);
        w.update(void 0, !1, u);
        u.matrixWorldInverse.flattenToArray(a1);
        u.projectionMatrix.flattenToArray(aN);
        aL.multiply(u.projectionMatrix, u.matrixWorldInverse);
        a0(aL);
        this.initWebGLObjects(w);
        ax(k);
        (this.autoClear || y) && this.clear();
        z = w.__webglObjects.length;
        for (y = 0; y < z; y++) {
            if (t = w.__webglObjects[y], B = t.object, B.visible) {
                if (!(B instanceof THREE.Mesh) || !B.frustumCulled || a5(B)) {
                    if (B.matrixWorld.flattenToArray(B._objectMatrixArray), aF(B, u, !0), aV(t), t.render = !0, this.sortObjects) {
                        t.object.renderDepth ? t.z = t.object.renderDepth : (aM.copy(B.position), aL.multiplyVector3(aM), t.z = aM.z)
                    }
                } else {
                    t.render = !1
                }
            } else {
                t.render = !1
            }
        }
        this.sortObjects && w.__webglObjects.sort(aW);
        x = w.__webglObjectsImmediate.length;
        for (y = 0; y < x; y++) {
            t = w.__webglObjectsImmediate[y], B = t.object, B.visible && (B.matrixAutoUpdate && B.matrixWorld.flattenToArray(B._objectMatrixArray), aF(B, u, !0), a2(t))
        }
        if (w.overrideMaterial) {
            a9(w.overrideMaterial.depthTest);
            aB(w.overrideMaterial.blending);
            for (y = 0; y < z; y++) {
                if (t = w.__webglObjects[y], t.render) {
                    B = t.object, m = t.buffer, a8(B), bc(u, p, f, w.overrideMaterial, m, B)
                }
            }
            for (y = 0; y < x; y++) {
                t = w.__webglObjectsImmediate[y], B = t.object, B.visible && (a8(B), n = bd(u, p, f, w.overrideMaterial, B), B.render(function (b) {
                    bb(b, n, w.overrideMaterial.shading)
                }))
            }
        } else {
            aB(THREE.NormalBlending);
            for (y = z - 1; y >= 0; y--) {
                if (t = w.__webglObjects[y], t.render) {
                    B = t.object;
                    m = t.buffer;
                    e = t.opaque;
                    a8(B);
                    for (t = 0; t < e.count; t++) {
                        h = e.list[t], a9(h.depthTest), a7(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits), bc(u, p, f, h, m, B)
                    }
                }
            }
            for (y = 0; y < x; y++) {
                if (t = w.__webglObjectsImmediate[y], B = t.object, B.visible) {
                    e = t.opaque;
                    a8(B);
                    for (t = 0; t < e.count; t++) {
                        h = e.list[t], a9(h.depthTest), a7(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits), n = bd(u, p, f, h, B), B.render(function (c) {
                            bb(c, n, h.shading)
                        })
                    }
                }
            }
            for (y = 0; y < z; y++) {
                if (t = w.__webglObjects[y], t.render) {
                    B = t.object;
                    m = t.buffer;
                    e = t.transparent;
                    a8(B);
                    for (t = 0; t < e.count; t++) {
                        h = e.list[t], aB(h.blending), a9(h.depthTest), a7(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits), bc(u, p, f, h, m, B)
                    }
                }
            }
            for (y = 0; y < x; y++) {
                if (t = w.__webglObjectsImmediate[y], B = t.object, B.visible) {
                    e = t.transparent;
                    a8(B);
                    for (t = 0; t < e.count; t++) {
                        h = e.list[t], aB(h.blending), a9(h.depthTest), a7(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits), n = bd(u, p, f, h, B), B.render(function (c) {
                            bb(c, n, h.shading)
                        })
                    }
                }
            }
        }
        w.__webglSprites.length && aU(w, u);
        k && k.minFilter !== THREE.NearestFilter && k.minFilter !== THREE.LinearFilter && ai(k)
    };
    this.initWebGLObjects = function (bG) {
        if (!bG.__webglObjects) {
            bG.__webglObjects = [], bG.__webglObjectsImmediate = [], bG.__webglSprites = []
        }
        for (; bG.__objectsAdded.length;) {
            var bE = bG.__objectsAdded[0],
                bD = bG,
                bA = void 0,
                bC = void 0,
                bz = void 0;
            if (!bE.__webglInit) {
                if (bE.__webglInit = !0, bE._modelViewMatrix = new THREE.Matrix4, bE._normalMatrixArray = new Float32Array(9), bE._modelViewMatrixArray = new Float32Array(16), bE._objectMatrixArray = new Float32Array(16), bE.matrixWorld.flattenToArray(bE._objectMatrixArray), bE instanceof THREE.Mesh) {
                    for (bA in bC = bE.geometry, bC.geometryGroups == void 0 && aC(bC), bC.geometryGroups) {
                        bz = bC.geometryGroups[bA];
                        if (!bz.__webglVertexBuffer) {
                            var bx = bz;
                            bx.__webglVertexBuffer = a6.createBuffer();
                            bx.__webglNormalBuffer = a6.createBuffer();
                            bx.__webglTangentBuffer = a6.createBuffer();
                            bx.__webglColorBuffer = a6.createBuffer();
                            bx.__webglUVBuffer = a6.createBuffer();
                            bx.__webglUV2Buffer = a6.createBuffer();
                            bx.__webglSkinVertexABuffer = a6.createBuffer();
                            bx.__webglSkinVertexBBuffer = a6.createBuffer();
                            bx.__webglSkinIndicesBuffer = a6.createBuffer();
                            bx.__webglSkinWeightsBuffer = a6.createBuffer();
                            bx.__webglFaceBuffer = a6.createBuffer();
                            bx.__webglLineBuffer = a6.createBuffer();
                            if (bx.numMorphTargets) {
                                var bv = void 0,
                                    bu = void 0;
                                bx.__webglMorphTargetsBuffers = [];
                                bv = 0;
                                for (bu = bx.numMorphTargets; bv < bu; bv++) {
                                    bx.__webglMorphTargetsBuffers.push(a6.createBuffer())
                                }
                            }
                            for (var bx = bz, bv = bE, bs = void 0, bt = void 0, br = void 0, bq = br = void 0, bU = void 0, bO = void 0, bo = bO = bu = 0, bp = br = bt = void 0, bI = bp = bt = bs = void 0, br = void 0, bq = bv.geometry, bU = bq.faces, bp = bx.faces, bs = 0, bt = bp.length; bs < bt; bs++) {
                                br = bp[bs], br = bU[br], br instanceof THREE.Face3 ? (bu += 3, bO += 1, bo += 3) : br instanceof THREE.Face4 && (bu += 4, bO += 2, bo += 4)
                            }
                            for (var bs = bx, bt = bv, b6 = bp = bU = void 0, bM = void 0, b6 = void 0, br = [], bU = 0, bp = bt.materials.length; bU < bp; bU++) {
                                if (b6 = bt.materials[bU], b6 instanceof THREE.MeshFaceMaterial) {
                                    b6 = 0;
                                    for (l = bs.materials.length; b6 < l; b6++) {
                                        (bM = bs.materials[b6]) && br.push(bM)
                                    }
                                } else {
                                    (bM = b6) && br.push(bM)
                                }
                            }
                            bs = br;
                            bx.__materials = bs;
                            a: {
                                bU = bt = void 0;
                                bp = bs.length;
                                for (bt = 0; bt < bp; bt++) {
                                    if (bU = bs[bt], bU.map || bU.lightMap || bU instanceof THREE.MeshShaderMaterial) {
                                        bt = !0;
                                        break a
                                    }
                                }
                                bt = !1
                            }
                            a: {
                                bp = bU = void 0;
                                br = bs.length;
                                for (bU = 0; bU < br; bU++) {
                                    if (bp = bs[bU], !(bp instanceof THREE.MeshBasicMaterial && !bp.envMap || bp instanceof THREE.MeshDepthMaterial)) {
                                        bp = bp && bp.shading != void 0 && bp.shading == THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading;
                                        break a
                                    }
                                }
                                bp = !1
                            }
                            a: {
                                br = bU = void 0;
                                b6 = bs.length;
                                for (bU = 0; bU < b6; bU++) {
                                    if (br = bs[bU], br.vertexColors) {
                                        br = br.vertexColors;
                                        break a
                                    }
                                }
                                br = !1
                            }
                            bx.__vertexArray = new Float32Array(bu * 3);
                            if (bp) {
                                bx.__normalArray = new Float32Array(bu * 3)
                            }
                            if (bq.hasTangents) {
                                bx.__tangentArray = new Float32Array(bu * 4)
                            }
                            if (br) {
                                bx.__colorArray = new Float32Array(bu * 3)
                            }
                            if (bt) {
                                if (bq.faceUvs.length > 0 || bq.faceVertexUvs.length > 0) {
                                    bx.__uvArray = new Float32Array(bu * 2)
                                }
                                if (bq.faceUvs.length > 1 || bq.faceVertexUvs.length > 1) {
                                    bx.__uv2Array = new Float32Array(bu * 2)
                                }
                            }
                            if (bv.geometry.skinWeights.length && bv.geometry.skinIndices.length) {
                                bx.__skinVertexAArray = new Float32Array(bu * 4), bx.__skinVertexBArray = new Float32Array(bu * 4), bx.__skinIndexArray = new Float32Array(bu * 4), bx.__skinWeightArray = new Float32Array(bu * 4)
                            }
                            bx.__faceArray = new Uint16Array(bO * 3 + (bv.geometry.edgeFaces ? bv.geometry.edgeFaces.length * 6 : 0));
                            bx.__lineArray = new Uint16Array(bo * 2);
                            if (bx.numMorphTargets) {
                                bx.__morphTargetsArrays = [];
                                bq = 0;
                                for (bU = bx.numMorphTargets; bq < bU; bq++) {
                                    bx.__morphTargetsArrays.push(new Float32Array(bu * 3))
                                }
                            }
                            bx.__needsSmoothNormals = bp == THREE.SmoothShading;
                            bx.__uvType = bt;
                            bx.__vertexColorType = br;
                            bx.__normalType = bp;
                            bx.__webglFaceCount = bO * 3 + (bv.geometry.edgeFaces ? bv.geometry.edgeFaces.length * 6 : 0);
                            bx.__webglLineCount = bo * 2;
                            bq = 0;
                            for (bU = bs.length; bq < bU; bq++) {
                                if (bt = bs[bq], bt.attributes) {
                                    if (bx.__webglCustomAttributes === void 0) {
                                        bx.__webglCustomAttributes = {}
                                    }
                                    for (a in bt.attributes) {
                                        br = bt.attributes[a];
                                        bp = {};
                                        for (bI in br) {
                                            bp[bI] = br[bI]
                                        }
                                        if (!bp.__webglInitialized || bp.createUniqueBuffers) {
                                            bp.__webglInitialized = !0, bO = 1, bp.type === "v2" ? bO = 2 : bp.type === "v3" ? bO = 3 : bp.type === "v4" ? bO = 4 : bp.type === "c" && (bO = 3), bp.size = bO, bp.array = new Float32Array(bu * bO), bp.buffer = a6.createBuffer(), bp.buffer.belongsToAttribute = a, br.needsUpdate = !0, bp.__original = br
                                        }
                                        bx.__webglCustomAttributes[a] = bp
                                    }
                                }
                            }
                            bx.__inittedArrays = !0;
                            bC.__dirtyVertices = !0;
                            bC.__dirtyMorphTargets = !0;
                            bC.__dirtyElements = !0;
                            bC.__dirtyUvs = !0;
                            bC.__dirtyNormals = !0;
                            bC.__dirtyTangents = !0;
                            bC.__dirtyColors = !0
                        }
                        au(bD.__webglObjects, bz, bE)
                    }
                } else {
                    if (bE instanceof THREE.Ribbon) {
                        bC = bE.geometry;
                        if (!bC.__webglVertexBuffer) {
                            bA = bC, bA.__webglVertexBuffer = a6.createBuffer(), bA.__webglColorBuffer = a6.createBuffer(), bA = bC, bz = bA.vertices.length, bA.__vertexArray = new Float32Array(bz * 3), bA.__colorArray = new Float32Array(bz * 3), bA.__webglVertexCount = bz, bC.__dirtyVertices = !0, bC.__dirtyColors = !0
                        }
                        au(bD.__webglObjects, bC, bE)
                    } else {
                        if (bE instanceof THREE.Line) {
                            bC = bE.geometry;
                            if (!bC.__webglVertexBuffer) {
                                bA = bC, bA.__webglVertexBuffer = a6.createBuffer(), bA.__webglColorBuffer = a6.createBuffer(), bA = bC, bz = bA.vertices.length, bA.__vertexArray = new Float32Array(bz * 3), bA.__colorArray = new Float32Array(bz * 3), bA.__webglLineCount = bz, bC.__dirtyVertices = !0, bC.__dirtyColors = !0
                            }
                            au(bD.__webglObjects, bC, bE)
                        } else {
                            if (bE instanceof THREE.ParticleSystem) {
                                bC = bE.geometry;
                                if (!bC.__webglVertexBuffer) {
                                    bA = bC;
                                    bA.__webglVertexBuffer = a6.createBuffer();
                                    bA.__webglColorBuffer = a6.createBuffer();
                                    bA = bC;
                                    bz = bE;
                                    bx = bA.vertices.length;
                                    bA.__vertexArray = new Float32Array(bx * 3);
                                    bA.__colorArray = new Float32Array(bx * 3);
                                    bA.__sortArray = [];
                                    bA.__webglParticleCount = bx;
                                    bA.__materials = bz.materials;
                                    bI = bu = bv = void 0;
                                    bv = 0;
                                    for (bu = bz.materials.length; bv < bu; bv++) {
                                        if (bI = bz.materials[bv], bI.attributes) {
                                            if (bA.__webglCustomAttributes === void 0) {
                                                bA.__webglCustomAttributes = {}
                                            }
                                            for (a in bI.attributes) {
                                                originalAttribute = bI.attributes[a];
                                                attribute = {};
                                                for (property in originalAttribute) {
                                                    attribute[property] = originalAttribute[property]
                                                }
                                                if (!attribute.__webglInitialized || attribute.createUniqueBuffers) {
                                                    attribute.__webglInitialized = !0, size = 1, attribute.type === "v2" ? size = 2 : attribute.type === "v3" ? size = 3 : attribute.type === "v4" ? size = 4 : attribute.type === "c" && (size = 3), attribute.size = size, attribute.array = new Float32Array(bx * size), attribute.buffer = a6.createBuffer(), attribute.buffer.belongsToAttribute = a, originalAttribute.needsUpdate = !0, attribute.__original = originalAttribute
                                                }
                                                bA.__webglCustomAttributes[a] = attribute
                                            }
                                        }
                                    }
                                    bC.__dirtyVertices = !0;
                                    bC.__dirtyColors = !0
                                }
                                au(bD.__webglObjects, bC, bE)
                            } else {
                                THREE.MarchingCubes !== void 0 && bE instanceof THREE.MarchingCubes ? bD.__webglObjectsImmediate.push({
                                    object: bE,
                                    opaque: {
                                        list: [],
                                        count: 0
                                    },
                                    transparent: {
                                        list: [],
                                        count: 0
                                    }
                                }) : bE instanceof THREE.Sprite && bD.__webglSprites.push(bE)
                            }
                        }
                    }
                }
            }
            bG.__objectsAdded.splice(0, 1)
        }
        for (; bG.__objectsRemoved.length;) {
            bD = bG.__objectsRemoved[0];
            bE = bG;
            if (bD instanceof THREE.Mesh || bD instanceof THREE.ParticleSystem || bD instanceof THREE.Ribbon || bD instanceof THREE.Line) {
                az(bE.__webglObjects, bD)
            } else {
                if (bD instanceof THREE.Sprite) {
                    bE = bE.__webglSprites;
                    bC = void 0;
                    for (bC = bE.length - 1; bC >= 0; bC--) {
                        bE[bC] == bD && bE.splice(bC, 1)
                    }
                } else {
                    bD instanceof THREE.MarchingCubes && az(bE.__webglObjectsImmediate, bD)
                }
            }
            bG.__objectsRemoved.splice(0, 1)
        }
        bE = 0;
        for (bD = bG.__webglObjects.length; bE < bD; bE++) {
            if (bA = bG.__webglObjects[bE].object, bu = bz = bC = void 0, bA instanceof THREE.Mesh) {
                bC = bA.geometry;
                bx = 0;
                for (bv = bC.geometryGroupsList.length; bx < bv; bx++) {
                    if (bz = bC.geometryGroupsList[bx], bu = aD(bz), bC.__dirtyVertices || bC.__dirtyMorphTargets || bC.__dirtyElements || bC.__dirtyUvs || bC.__dirtyNormals || bC.__dirtyColors || bC.__dirtyTangents || bu) {
                        if (bu = bz, bI = a6.DYNAMIC_DRAW, bO = !bC.dynamic, bu.__inittedArrays) {
                            var E = bq = bo = void 0,
                                b4 = void 0,
                                c = E = void 0,
                                bW = void 0,
                                bk = void 0,
                                bY = void 0,
                                bZ = bM = b6 = br = bp = bU = bt = bs = void 0,
                                bV = void 0,
                                bX = b4 = bY = b4 = bk = bW = void 0,
                                b7 = void 0,
                                b1 = b7 = bX = bW = void 0,
                                bJ = void 0,
                                bl = b1 = b7 = bX = E = E = c = bY = b4 = b1 = b7 = bX = bJ = b1 = b7 = bX = bJ = b1 = b7 = bX = void 0,
                                bT = 0,
                                bK = 0,
                                bP = 0,
                                cq = 0,
                                bQ = 0,
                                by = 0,
                                bS = 0,
                                ck = 0,
                                bF = 0,
                                bR = 0,
                                bN = 0,
                                b1 = bX = 0,
                                b1 = void 0,
                                bL = bu.__vertexArray,
                                bj = bu.__uvArray,
                                cn = bu.__uv2Array,
                                cg = bu.__normalArray,
                                ci = bu.__tangentArray,
                                cj = bu.__colorArray,
                                ce = bu.__skinVertexAArray,
                                D = bu.__skinVertexBArray,
                                b8 = bu.__skinIndexArray,
                                bi = bu.__skinWeightArray,
                                b2 = bu.__morphTargetsArrays,
                                cf = bu.__webglCustomAttributes,
                                b7 = void 0,
                                H = bu.__faceArray,
                                bB = bu.__lineArray,
                                cp = bu.__needsSmoothNormals,
                                bt = bu.__vertexColorType,
                                bs = bu.__uvType,
                                bU = bu.__normalType,
                                N = bA.geometry,
                                b0 = N.__dirtyVertices,
                                co = N.__dirtyElements,
                                cc = N.__dirtyUvs,
                                G = N.__dirtyNormals,
                                cl = N.__dirtyTangents,
                                b5 = N.__dirtyColors,
                                cd = N.__dirtyMorphTargets,
                                b9 = N.vertices,
                                bw = bu.faces,
                                cm = N.faces,
                                bh = N.faceVertexUvs[0],
                                o = N.faceVertexUvs[1],
                                bH = N.skinVerticesA,
                                bn = N.skinVerticesB,
                                bg = N.skinIndices,
                                b3 = N.skinWeights,
                                ch = N.morphTargets;
                            if (cf) {
                                for (bl in cf) {
                                    cf[bl].offset = 0, cf[bl].offsetSrc = 0
                                }
                            }
                            bo = 0;
                            for (bq = bw.length; bo < bq; bo++) {
                                if (E = bw[bo], b4 = cm[E], bh && (bp = bh[E]), o && (br = o[E]), E = b4.vertexNormals, c = b4.normal, bW = b4.vertexColors, bk = b4.color, bY = b4.vertexTangents, b4 instanceof THREE.Face3) {
                                    if (b0) {
                                        b6 = b9[b4.a].position, bM = b9[b4.b].position, bZ = b9[b4.c].position, bL[bK] = b6.x, bL[bK + 1] = b6.y, bL[bK + 2] = b6.z, bL[bK + 3] = bM.x, bL[bK + 4] = bM.y, bL[bK + 5] = bM.z, bL[bK + 6] = bZ.x, bL[bK + 7] = bZ.y, bL[bK + 8] = bZ.z, bK += 9
                                    }
                                    if (cf) {
                                        for (bl in cf) {
                                            if (b7 = cf[bl], b7.__original.needsUpdate) {
                                                bX = b7.offset, b1 = b7.offsetSrc, b7.size === 1 ? (b7.boundTo === void 0 || b7.boundTo === "vertices" ? (b7.array[bX] = b7.value[b4.a], b7.array[bX + 1] = b7.value[b4.b], b7.array[bX + 2] = b7.value[b4.c]) : b7.boundTo === "faces" ? (b1 = b7.value[b1], b7.array[bX] = b1, b7.array[bX + 1] = b1, b7.array[bX + 2] = b1, b7.offsetSrc++) : b7.boundTo === "faceVertices" && (b7.array[bX] = b7.value[b1], b7.array[bX + 1] = b7.value[b1 + 1], b7.array[bX + 2] = b7.value[b1 + 2], b7.offsetSrc += 3), b7.offset += 3) : (b7.boundTo === void 0 || b7.boundTo === "vertices" ? (b6 = b7.value[b4.a], bM = b7.value[b4.b], bZ = b7.value[b4.c]) : b7.boundTo === "faces" ? (bZ = bM = b6 = b1 = b7.value[b1], b7.offsetSrc++) : b7.boundTo === "faceVertices" && (b6 = b7.value[b1], bM = b7.value[b1 + 1], bZ = b7.value[b1 + 2], b7.offsetSrc += 3), b7.size === 2 ? (b7.array[bX] = b6.x, b7.array[bX + 1] = b6.y, b7.array[bX + 2] = bM.x, b7.array[bX + 3] = bM.y, b7.array[bX + 4] = bZ.x, b7.array[bX + 5] = bZ.y, b7.offset += 6) : b7.size === 3 ? (b7.type === "c" ? (b7.array[bX] = b6.r, b7.array[bX + 1] = b6.g, b7.array[bX + 2] = b6.b, b7.array[bX + 3] = bM.r, b7.array[bX + 4] = bM.g, b7.array[bX + 5] = bM.b, b7.array[bX + 6] = bZ.r, b7.array[bX + 7] = bZ.g, b7.array[bX + 8] = bZ.b) : (b7.array[bX] = b6.x, b7.array[bX + 1] = b6.y, b7.array[bX + 2] = b6.z, b7.array[bX + 3] = bM.x, b7.array[bX + 4] = bM.y, b7.array[bX + 5] = bM.z, b7.array[bX + 6] = bZ.x, b7.array[bX + 7] = bZ.y, b7.array[bX + 8] = bZ.z), b7.offset += 9) : (b7.array[bX] = b6.x, b7.array[bX + 1] = b6.y, b7.array[bX + 2] = b6.z, b7.array[bX + 3] = b6.w, b7.array[bX + 4] = bM.x, b7.array[bX + 5] = bM.y, b7.array[bX + 6] = bM.z, b7.array[bX + 7] = bM.w, b7.array[bX + 8] = bZ.x, b7.array[bX + 9] = bZ.y, b7.array[bX + 10] = bZ.z, b7.array[bX + 11] = bZ.w, b7.offset += 12))
                                            }
                                        }
                                    }
                                    if (cd) {
                                        bX = 0;
                                        for (b7 = ch.length; bX < b7; bX++) {
                                            b6 = ch[bX].vertices[b4.a].position, bM = ch[bX].vertices[b4.b].position, bZ = ch[bX].vertices[b4.c].position, b1 = b2[bX], b1[bN] = b6.x, b1[bN + 1] = b6.y, b1[bN + 2] = b6.z, b1[bN + 3] = bM.x, b1[bN + 4] = bM.y, b1[bN + 5] = bM.z, b1[bN + 6] = bZ.x, b1[bN + 7] = bZ.y, b1[bN + 8] = bZ.z
                                        }
                                        bN += 9
                                    }
                                    if (b3.length) {
                                        bX = b3[b4.a], b7 = b3[b4.b], b1 = b3[b4.c], bi[bR] = bX.x, bi[bR + 1] = bX.y, bi[bR + 2] = bX.z, bi[bR + 3] = bX.w, bi[bR + 4] = b7.x, bi[bR + 5] = b7.y, bi[bR + 6] = b7.z, bi[bR + 7] = b7.w, bi[bR + 8] = b1.x, bi[bR + 9] = b1.y, bi[bR + 10] = b1.z, bi[bR + 11] = b1.w, bX = bg[b4.a], b7 = bg[b4.b], b1 = bg[b4.c], b8[bR] = bX.x, b8[bR + 1] = bX.y, b8[bR + 2] = bX.z, b8[bR + 3] = bX.w, b8[bR + 4] = b7.x, b8[bR + 5] = b7.y, b8[bR + 6] = b7.z, b8[bR + 7] = b7.w, b8[bR + 8] = b1.x, b8[bR + 9] = b1.y, b8[bR + 10] = b1.z, b8[bR + 11] = b1.w, bX = bH[b4.a], b7 = bH[b4.b], b1 = bH[b4.c], ce[bR] = bX.x, ce[bR + 1] = bX.y, ce[bR + 2] = bX.z, ce[bR + 3] = 1, ce[bR + 4] = b7.x, ce[bR + 5] = b7.y, ce[bR + 6] = b7.z, ce[bR + 7] = 1, ce[bR + 8] = b1.x, ce[bR + 9] = b1.y, ce[bR + 10] = b1.z, ce[bR + 11] = 1, bX = bn[b4.a], b7 = bn[b4.b], b1 = bn[b4.c], D[bR] = bX.x, D[bR + 1] = bX.y, D[bR + 2] = bX.z, D[bR + 3] = 1, D[bR + 4] = b7.x, D[bR + 5] = b7.y, D[bR + 6] = b7.z, D[bR + 7] = 1, D[bR + 8] = b1.x, D[bR + 9] = b1.y, D[bR + 10] = b1.z, D[bR + 11] = 1, bR += 12
                                    }
                                    if (b5 && bt) {
                                        bW.length == 3 && bt == THREE.VertexColors ? (b4 = bW[0], bX = bW[1], b7 = bW[2]) : b7 = bX = b4 = bk, cj[bF] = b4.r, cj[bF + 1] = b4.g, cj[bF + 2] = b4.b, cj[bF + 3] = bX.r, cj[bF + 4] = bX.g, cj[bF + 5] = bX.b, cj[bF + 6] = b7.r, cj[bF + 7] = b7.g, cj[bF + 8] = b7.b, bF += 9
                                    }
                                    if (cl && N.hasTangents) {
                                        bW = bY[0], bk = bY[1], b4 = bY[2], ci[bS] = bW.x, ci[bS + 1] = bW.y, ci[bS + 2] = bW.z, ci[bS + 3] = bW.w, ci[bS + 4] = bk.x, ci[bS + 5] = bk.y, ci[bS + 6] = bk.z, ci[bS + 7] = bk.w, ci[bS + 8] = b4.x, ci[bS + 9] = b4.y, ci[bS + 10] = b4.z, ci[bS + 11] = b4.w, bS += 12
                                    }
                                    if (G && bU) {
                                        if (E.length == 3 && cp) {
                                            for (bY = 0; bY < 3; bY++) {
                                                c = E[bY], cg[by] = c.x, cg[by + 1] = c.y, cg[by + 2] = c.z, by += 3
                                            }
                                        } else {
                                            for (bY = 0; bY < 3; bY++) {
                                                cg[by] = c.x, cg[by + 1] = c.y, cg[by + 2] = c.z, by += 3
                                            }
                                        }
                                    }
                                    if (cc && bp !== void 0 && bs) {
                                        for (bY = 0; bY < 3; bY++) {
                                            E = bp[bY], bj[bP] = E.u, bj[bP + 1] = E.v, bP += 2
                                        }
                                    }
                                    if (cc && br !== void 0 && bs) {
                                        for (bY = 0; bY < 3; bY++) {
                                            E = br[bY], cn[cq] = E.u, cn[cq + 1] = E.v, cq += 2
                                        }
                                    }
                                    co && (H[bQ] = bT, H[bQ + 1] = bT + 1, H[bQ + 2] = bT + 2, bQ += 3, bB[ck] = bT, bB[ck + 1] = bT + 1, bB[ck + 2] = bT, bB[ck + 3] = bT + 2, bB[ck + 4] = bT + 1, bB[ck + 5] = bT + 2, ck += 6, bT += 3)
                                } else {
                                    if (b4 instanceof THREE.Face4) {
                                        if (b0) {
                                            b6 = b9[b4.a].position, bM = b9[b4.b].position, bZ = b9[b4.c].position, bV = b9[b4.d].position, bL[bK] = b6.x, bL[bK + 1] = b6.y, bL[bK + 2] = b6.z, bL[bK + 3] = bM.x, bL[bK + 4] = bM.y, bL[bK + 5] = bM.z, bL[bK + 6] = bZ.x, bL[bK + 7] = bZ.y, bL[bK + 8] = bZ.z, bL[bK + 9] = bV.x, bL[bK + 10] = bV.y, bL[bK + 11] = bV.z, bK += 12
                                        }
                                        if (cf) {
                                            for (bl in cf) {
                                                if (b7 = cf[bl], b7.__original.needsUpdate) {
                                                    bX = b7.offset, b1 = b7.offsetSrc, b7.size === 1 ? (b7.boundTo === void 0 || b7.boundTo === "vertices" ? (b7.array[bX] = b7.value[b4.a], b7.array[bX + 1] = b7.value[b4.b], b7.array[bX + 2] = b7.value[b4.c], b7.array[bX + 3] = b7.value[b4.d]) : b7.boundTo === "faces" ? (b1 = b7.value[b1], b7.array[bX] = b1, b7.array[bX + 1] = b1, b7.array[bX + 2] = b1, b7.array[bX + 3] = b1, b7.offsetSrc++) : b7.boundTo === "faceVertices" && (b7.array[bX] = b7.value[b1], b7.array[bX + 1] = b7.value[b1 + 1], b7.array[bX + 2] = b7.value[b1 + 2], b7.array[bX + 3] = b7.value[b1 + 3], b7.offsetSrc += 4), b7.offset += 4) : (b7.boundTo === void 0 || b7.boundTo === "vertices" ? (b6 = b7.value[b4.a], bM = b7.value[b4.b], bZ = b7.value[b4.c], bV = b7.value[b4.d]) : b7.boundTo === "faces" ? (bV = bZ = bM = b6 = b1 = b7.value[b1], b7.offsetSrc++) : b7.boundTo === "faceVertices" && (b6 = b7.value[b1], bM = b7.value[b1 + 1], bZ = b7.value[b1 + 2], bV = b7.value[b1 + 3], b7.offsetSrc += 4), b7.size === 2 ? (b7.array[bX] = b6.x, b7.array[bX + 1] = b6.y, b7.array[bX + 2] = bM.x, b7.array[bX + 3] = bM.y, b7.array[bX + 4] = bZ.x, b7.array[bX + 5] = bZ.y, b7.array[bX + 6] = bV.x, b7.array[bX + 7] = bV.y, b7.offset += 8) : b7.size === 3 ? (b7.type === "c" ? (b7.array[bX] = b6.r, b7.array[bX + 1] = b6.g, b7.array[bX + 2] = b6.b, b7.array[bX + 3] = bM.r, b7.array[bX + 4] = bM.g, b7.array[bX + 5] = bM.b, b7.array[bX + 6] = bZ.r, b7.array[bX + 7] = bZ.g, b7.array[bX + 8] = bZ.b, b7.array[bX + 9] = bV.r, b7.array[bX + 10] = bV.g, b7.array[bX + 11] = bV.b) : (b7.array[bX] = b6.x, b7.array[bX + 1] = b6.y, b7.array[bX + 2] = b6.z, b7.array[bX + 3] = bM.x, b7.array[bX + 4] = bM.y, b7.array[bX + 5] = bM.z, b7.array[bX + 6] = bZ.x, b7.array[bX + 7] = bZ.y, b7.array[bX + 8] = bZ.z, b7.array[bX + 9] = bV.x, b7.array[bX + 10] = bV.y, b7.array[bX + 11] = bV.z), b7.offset += 12) : (b7.array[bX] = b6.x, b7.array[bX + 1] = b6.y, b7.array[bX + 2] = b6.z, b7.array[bX + 3] = b6.w, b7.array[bX + 4] = bM.x, b7.array[bX + 5] = bM.y, b7.array[bX + 6] = bM.z, b7.array[bX + 7] = bM.w, b7.array[bX + 8] = bZ.x, b7.array[bX + 9] = bZ.y, b7.array[bX + 10] = bZ.z, b7.array[bX + 11] = bZ.w, b7.array[bX + 12] = bV.x, b7.array[bX + 13] = bV.y, b7.array[bX + 14] = bV.z, b7.array[bX + 15] = bV.w, b7.offset += 16))
                                                }
                                            }
                                        }
                                        if (cd) {
                                            bX = 0;
                                            for (b7 = ch.length; bX < b7; bX++) {
                                                b6 = ch[bX].vertices[b4.a].position, bM = ch[bX].vertices[b4.b].position, bZ = ch[bX].vertices[b4.c].position, bV = ch[bX].vertices[b4.d].position, b1 = b2[bX], b1[bN] = b6.x, b1[bN + 1] = b6.y, b1[bN + 2] = b6.z, b1[bN + 3] = bM.x, b1[bN + 4] = bM.y, b1[bN + 5] = bM.z, b1[bN + 6] = bZ.x, b1[bN + 7] = bZ.y, b1[bN + 8] = bZ.z, b1[bN + 9] = bV.x, b1[bN + 10] = bV.y, b1[bN + 11] = bV.z
                                            }
                                            bN += 12
                                        }
                                        if (b3.length) {
                                            bX = b3[b4.a], b7 = b3[b4.b], b1 = b3[b4.c], bJ = b3[b4.d], bi[bR] = bX.x, bi[bR + 1] = bX.y, bi[bR + 2] = bX.z, bi[bR + 3] = bX.w, bi[bR + 4] = b7.x, bi[bR + 5] = b7.y, bi[bR + 6] = b7.z, bi[bR + 7] = b7.w, bi[bR + 8] = b1.x, bi[bR + 9] = b1.y, bi[bR + 10] = b1.z, bi[bR + 11] = b1.w, bi[bR + 12] = bJ.x, bi[bR + 13] = bJ.y, bi[bR + 14] = bJ.z, bi[bR + 15] = bJ.w, bX = bg[b4.a], b7 = bg[b4.b], b1 = bg[b4.c], bJ = bg[b4.d], b8[bR] = bX.x, b8[bR + 1] = bX.y, b8[bR + 2] = bX.z, b8[bR + 3] = bX.w, b8[bR + 4] = b7.x, b8[bR + 5] = b7.y, b8[bR + 6] = b7.z, b8[bR + 7] = b7.w, b8[bR + 8] = b1.x, b8[bR + 9] = b1.y, b8[bR + 10] = b1.z, b8[bR + 11] = b1.w, b8[bR + 12] = bJ.x, b8[bR + 13] = bJ.y, b8[bR + 14] = bJ.z, b8[bR + 15] = bJ.w, bX = bH[b4.a], b7 = bH[b4.b], b1 = bH[b4.c], bJ = bH[b4.d], ce[bR] = bX.x, ce[bR + 1] = bX.y, ce[bR + 2] = bX.z, ce[bR + 3] = 1, ce[bR + 4] = b7.x, ce[bR + 5] = b7.y, ce[bR + 6] = b7.z, ce[bR + 7] = 1, ce[bR + 8] = b1.x, ce[bR + 9] = b1.y, ce[bR + 10] = b1.z, ce[bR + 11] = 1, ce[bR + 12] = bJ.x, ce[bR + 13] = bJ.y, ce[bR + 14] = bJ.z, ce[bR + 15] = 1, bX = bn[b4.a], b7 = bn[b4.b], b1 = bn[b4.c], b4 = bn[b4.d], D[bR] = bX.x, D[bR + 1] = bX.y, D[bR + 2] = bX.z, D[bR + 3] = 1, D[bR + 4] = b7.x, D[bR + 5] = b7.y, D[bR + 6] = b7.z, D[bR + 7] = 1, D[bR + 8] = b1.x, D[bR + 9] = b1.y, D[bR + 10] = b1.z, D[bR + 11] = 1, D[bR + 12] = b4.x, D[bR + 13] = b4.y, D[bR + 14] = b4.z, D[bR + 15] = 1, bR += 16
                                        }
                                        if (b5 && bt) {
                                            bW.length == 4 && bt == THREE.VertexColors ? (b4 = bW[0], bX = bW[1], b7 = bW[2], bW = bW[3]) : bW = b7 = bX = b4 = bk, cj[bF] = b4.r, cj[bF + 1] = b4.g, cj[bF + 2] = b4.b, cj[bF + 3] = bX.r, cj[bF + 4] = bX.g, cj[bF + 5] = bX.b, cj[bF + 6] = b7.r, cj[bF + 7] = b7.g, cj[bF + 8] = b7.b, cj[bF + 9] = bW.r, cj[bF + 10] = bW.g, cj[bF + 11] = bW.b, bF += 12
                                        }
                                        if (cl && N.hasTangents) {
                                            bW = bY[0], bk = bY[1], b4 = bY[2], bY = bY[3], ci[bS] = bW.x, ci[bS + 1] = bW.y, ci[bS + 2] = bW.z, ci[bS + 3] = bW.w, ci[bS + 4] = bk.x, ci[bS + 5] = bk.y, ci[bS + 6] = bk.z, ci[bS + 7] = bk.w, ci[bS + 8] = b4.x, ci[bS + 9] = b4.y, ci[bS + 10] = b4.z, ci[bS + 11] = b4.w, ci[bS + 12] = bY.x, ci[bS + 13] = bY.y, ci[bS + 14] = bY.z, ci[bS + 15] = bY.w, bS += 16
                                        }
                                        if (G && bU) {
                                            if (E.length == 4 && cp) {
                                                for (bY = 0; bY < 4; bY++) {
                                                    c = E[bY], cg[by] = c.x, cg[by + 1] = c.y, cg[by + 2] = c.z, by += 3
                                                }
                                            } else {
                                                for (bY = 0; bY < 4; bY++) {
                                                    cg[by] = c.x, cg[by + 1] = c.y, cg[by + 2] = c.z, by += 3
                                                }
                                            }
                                        }
                                        if (cc && bp !== void 0 && bs) {
                                            for (bY = 0; bY < 4; bY++) {
                                                E = bp[bY], bj[bP] = E.u, bj[bP + 1] = E.v, bP += 2
                                            }
                                        }
                                        if (cc && br !== void 0 && bs) {
                                            for (bY = 0; bY < 4; bY++) {
                                                E = br[bY], cn[cq] = E.u, cn[cq + 1] = E.v, cq += 2
                                            }
                                        }
                                        co && (H[bQ] = bT, H[bQ + 1] = bT + 1, H[bQ + 2] = bT + 3, H[bQ + 3] = bT + 1, H[bQ + 4] = bT + 2, H[bQ + 5] = bT + 3, bQ += 6, bB[ck] = bT, bB[ck + 1] = bT + 1, bB[ck + 2] = bT, bB[ck + 3] = bT + 3, bB[ck + 4] = bT + 1, bB[ck + 5] = bT + 2, bB[ck + 6] = bT + 2, bB[ck + 7] = bT + 3, ck += 8, bT += 4)
                                    }
                                }
                            }
                            b0 && (a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglVertexBuffer), a6.bufferData(a6.ARRAY_BUFFER, bL, bI));
                            if (cf) {
                                for (bl in cf) {
                                    b7 = cf[bl], b7.__original.needsUpdate && (a6.bindBuffer(a6.ARRAY_BUFFER, b7.buffer), a6.bufferData(a6.ARRAY_BUFFER, b7.array, bI))
                                }
                            }
                            if (cd) {
                                bX = 0;
                                for (b7 = ch.length; bX < b7; bX++) {
                                    a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglMorphTargetsBuffers[bX]), a6.bufferData(a6.ARRAY_BUFFER, b2[bX], bI)
                                }
                            }
                            b5 && bF > 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglColorBuffer), a6.bufferData(a6.ARRAY_BUFFER, cj, bI));
                            G && (a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglNormalBuffer), a6.bufferData(a6.ARRAY_BUFFER, cg, bI));
                            cl && N.hasTangents && (a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglTangentBuffer), a6.bufferData(a6.ARRAY_BUFFER, ci, bI));
                            cc && bP > 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglUVBuffer), a6.bufferData(a6.ARRAY_BUFFER, bj, bI));
                            cc && cq > 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglUV2Buffer), a6.bufferData(a6.ARRAY_BUFFER, cn, bI));
                            co && (a6.bindBuffer(a6.ELEMENT_ARRAY_BUFFER, bu.__webglFaceBuffer), a6.bufferData(a6.ELEMENT_ARRAY_BUFFER, H, bI), a6.bindBuffer(a6.ELEMENT_ARRAY_BUFFER, bu.__webglLineBuffer), a6.bufferData(a6.ELEMENT_ARRAY_BUFFER, bB, bI));
                            bR > 0 && (a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglSkinVertexABuffer), a6.bufferData(a6.ARRAY_BUFFER, ce, bI), a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglSkinVertexBBuffer), a6.bufferData(a6.ARRAY_BUFFER, D, bI), a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglSkinIndicesBuffer), a6.bufferData(a6.ARRAY_BUFFER, b8, bI), a6.bindBuffer(a6.ARRAY_BUFFER, bu.__webglSkinWeightsBuffer), a6.bufferData(a6.ARRAY_BUFFER, bi, bI));
                            bO && (delete bu.__inittedArrays, delete bu.__colorArray, delete bu.__normalArray, delete bu.__tangentArray, delete bu.__uvArray, delete bu.__uv2Array, delete bu.__faceArray, delete bu.__vertexArray, delete bu.__lineArray, delete bu.__skinVertexAArray, delete bu.__skinVertexBArray, delete bu.__skinIndexArray, delete bu.__skinWeightArray)
                        }
                    }
                }
                bC.__dirtyVertices = !1;
                bC.__dirtyMorphTargets = !1;
                bC.__dirtyElements = !1;
                bC.__dirtyUvs = !1;
                bC.__dirtyNormals = !1;
                bC.__dirtyTangents = !1;
                bC.__dirtyColors = !1;
                aA(bz)
            } else {
                if (bA instanceof THREE.Ribbon) {
                    bC = bA.geometry;
                    if (bC.__dirtyVertices || bC.__dirtyColors) {
                        bA = bC;
                        bz = a6.DYNAMIC_DRAW;
                        bx = bo = bO = bO = void 0;
                        bq = bA.vertices;
                        bv = bA.colors;
                        bs = bq.length;
                        bu = bv.length;
                        bt = bA.__vertexArray;
                        bI = bA.__colorArray;
                        bU = bA.__dirtyColors;
                        if (bA.__dirtyVertices) {
                            for (bO = 0; bO < bs; bO++) {
                                bo = bq[bO].position, bx = bO * 3, bt[bx] = bo.x, bt[bx + 1] = bo.y, bt[bx + 2] = bo.z
                            }
                            a6.bindBuffer(a6.ARRAY_BUFFER, bA.__webglVertexBuffer);
                            a6.bufferData(a6.ARRAY_BUFFER, bt, bz)
                        }
                        if (bU) {
                            for (bO = 0; bO < bu; bO++) {
                                color = bv[bO], bx = bO * 3, bI[bx] = color.r, bI[bx + 1] = color.g, bI[bx + 2] = color.b
                            }
                            a6.bindBuffer(a6.ARRAY_BUFFER, bA.__webglColorBuffer);
                            a6.bufferData(a6.ARRAY_BUFFER, bI, bz)
                        }
                    }
                    bC.__dirtyVertices = !1;
                    bC.__dirtyColors = !1
                } else {
                    if (bA instanceof THREE.Line) {
                        bC = bA.geometry;
                        if (bC.__dirtyVertices || bC.__dirtyColors) {
                            bA = bC;
                            bz = a6.DYNAMIC_DRAW;
                            bx = bo = bO = bO = void 0;
                            bq = bA.vertices;
                            bv = bA.colors;
                            bs = bq.length;
                            bu = bv.length;
                            bt = bA.__vertexArray;
                            bI = bA.__colorArray;
                            bU = bA.__dirtyColors;
                            if (bA.__dirtyVertices) {
                                for (bO = 0; bO < bs; bO++) {
                                    bo = bq[bO].position, bx = bO * 3, bt[bx] = bo.x, bt[bx + 1] = bo.y, bt[bx + 2] = bo.z
                                }
                                a6.bindBuffer(a6.ARRAY_BUFFER, bA.__webglVertexBuffer);
                                a6.bufferData(a6.ARRAY_BUFFER, bt, bz)
                            }
                            if (bU) {
                                for (bO = 0; bO < bu; bO++) {
                                    color = bv[bO], bx = bO * 3, bI[bx] = color.r, bI[bx + 1] = color.g, bI[bx + 2] = color.b
                                }
                                a6.bindBuffer(a6.ARRAY_BUFFER, bA.__webglColorBuffer);
                                a6.bufferData(a6.ARRAY_BUFFER, bI, bz)
                            }
                        }
                        bC.__dirtyVertices = !1;
                        bC.__dirtyColors = !1
                    } else {
                        if (bA instanceof THREE.ParticleSystem) {
                            bC = bA.geometry, bu = aD(bC), (bC.__dirtyVertices || bC.__dirtyColors || bA.sortParticles || bu) && be(bC, a6.DYNAMIC_DRAW, bA), bC.__dirtyVertices = !1, bC.__dirtyColors = !1, aA(bC)
                        }
                    }
                }
            }
        }
    };
    this.setFaceCulling = function (c, f) {
        c ? (!f || f == "ccw" ? a6.frontFace(a6.CCW) : a6.frontFace(a6.CW), c == "back" ? a6.cullFace(a6.BACK) : c == "front" ? a6.cullFace(a6.FRONT) : a6.cullFace(a6.FRONT_AND_BACK), a6.enable(a6.CULL_FACE)) : a6.disable(a6.CULL_FACE)
    };
    this.supportsVertexTextures = function () {
        return aX
    }
};
THREE.WebGLRenderTarget = function (f, k, h) {
    this.width = f;
    this.height = k;
    h = h || {};
    this.wrapS = h.wrapS !== void 0 ? h.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = h.wrapT !== void 0 ? h.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = h.magFilter !== void 0 ? h.magFilter : THREE.LinearFilter;
    this.minFilter = h.minFilter !== void 0 ? h.minFilter : THREE.LinearMipMapLinearFilter;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.format = h.format !== void 0 ? h.format : THREE.RGBAFormat;
    this.type = h.type !== void 0 ? h.type : THREE.UnsignedByteType;
    this.depthBuffer = h.depthBuffer !== void 0 ? h.depthBuffer : !0;
    this.stencilBuffer = h.stencilBuffer !== void 0 ? h.stencilBuffer : !0
};
THREE.WebGLRenderTarget.prototype.clone = function () {
    var c = new THREE.WebGLRenderTarget(this.width, this.height);
    c.wrapS = this.wrapS;
    c.wrapT = this.wrapT;
    c.magFilter = this.magFilter;
    c.minFilter = this.minFilter;
    c.offset.copy(this.offset);
    c.repeat.copy(this.repeat);
    c.format = this.format;
    c.type = this.type;
    c.depthBuffer = this.depthBuffer;
    c.stencilBuffer = this.stencilBuffer;
    return c
};
THREE.WebGLRenderTargetCube = function (f, k, h) {
    THREE.WebGLRenderTarget.call(this, f, k, h);
    this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = new THREE.WebGLRenderTarget;
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;
THREE.RenderableVertex = function () {
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function (c) {
    this.positionWorld.copy(c.positionWorld);
    this.positionScreen.copy(c.positionScreen)
};
THREE.RenderableFace3 = function () {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.faceMaterials = this.meshMaterials = null;
    this.overdraw = !1;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableFace4 = function () {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.v4 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.faceMaterials = this.meshMaterials = null;
    this.overdraw = !1;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableObject = function () {
    this.z = this.object = null
};
THREE.RenderableParticle = function () {
    this.rotation = this.z = this.y = this.x = null;
    this.scale = new THREE.Vector2;
    this.materials = null
};
THREE.RenderableLine = function () {
    this.z = null;
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.materials = null
};
THREE.ColorUtils = {
    adjustHSV: function (k, p, o, n) {
        var m = THREE.ColorUtils.__hsv;
        THREE.ColorUtils.rgbToHsv(k, m);
        m.h = THREE.ColorUtils.clamp(m.h + p, 0, 1);
        m.s = THREE.ColorUtils.clamp(m.s + o, 0, 1);
        m.v = THREE.ColorUtils.clamp(m.v + n, 0, 1);
        k.setHSV(m.h, m.s, m.v)
    },
    rgbToHsv: function (p, y) {
        var w = p.r,
            v = p.g,
            u = p.b,
            o = Math.max(Math.max(w, v), u),
            t = Math.min(Math.min(w, v), u);
        if (t == o) {
            t = w = 0
        } else {
            var x = o - t,
                t = x / o,
                w = w == o ? (v - u) / x : v == o ? 2 + (u - w) / x : 4 + (w - v) / x;
            w /= 6;
            w < 0 && (w += 1);
            w > 1 && (w -= 1)
        }
        y === void 0 && (y = {
            h: 0,
            s: 0,
            v: 0
        });
        y.h = w;
        y.s = t;
        y.v = o;
        return y
    },
    clamp: function (f, k, h) {
        return f < k ? k : f > h ? h : f
    }
};
THREE.ColorUtils.__hsv = {
    h: 0,
    s: 0,
    v: 0
};
THREE.GeometryUtils = {
    merge: function (J, H) {
        var F = H instanceof THREE.Mesh,
            E = J.vertices.length,
            D = F ? H.geometry : H,
            B = J.vertices,
            C = D.vertices,
            A = J.faces,
            N = D.faces,
            o = J.faceVertexUvs[0],
            D = D.faceVertexUvs[0];
        F && H.matrixAutoUpdate && H.updateMatrix();
        for (var M = 0, O = C.length; M < O; M++) {
            var K = new THREE.Vertex(C[M].position.clone());
            F && H.matrix.multiplyVector3(K.position);
            B.push(K)
        }
        M = 0;
        for (O = N.length; M < O; M++) {
            var C = N[M],
                L, G, I = C.vertexNormals,
                K = C.vertexColors;
            C instanceof THREE.Face3 ? L = new THREE.Face3(C.a + E, C.b + E, C.c + E) : C instanceof THREE.Face4 && (L = new THREE.Face4(C.a + E, C.b + E, C.c + E, C.d + E));
            L.normal.copy(C.normal);
            F = 0;
            for (B = I.length; F < B; F++) {
                G = I[F], L.vertexNormals.push(G.clone())
            }
            L.color.copy(C.color);
            F = 0;
            for (B = K.length; F < B; F++) {
                G = K[F], L.vertexColors.push(G.clone())
            }
            L.materials = C.materials.slice();
            L.centroid.copy(C.centroid);
            A.push(L)
        }
        M = 0;
        for (O = D.length; M < O; M++) {
            E = D[M];
            A = [];
            F = 0;
            for (B = E.length; F < B; F++) {
                A.push(new THREE.UV(E[F].u, E[F].v))
            }
            o.push(A)
        }
    },
    clone: function (D) {
        var C = new THREE.Geometry,
            B, A = D.vertices,
            z = D.faces,
            x = D.faceVertexUvs[0],
            D = 0;
        for (B = A.length; D < B; D++) {
            var y = new THREE.Vertex(A[D].position.clone());
            C.vertices.push(y)
        }
        D = 0;
        for (B = z.length; D < B; D++) {
            var w = z[D],
                F, o, E = w.vertexNormals,
                G = w.vertexColors;
            w instanceof THREE.Face3 ? F = new THREE.Face3(w.a, w.b, w.c) : w instanceof THREE.Face4 && (F = new THREE.Face4(w.a, w.b, w.c, w.d));
            F.normal.copy(w.normal);
            A = 0;
            for (y = E.length; A < y; A++) {
                o = E[A], F.vertexNormals.push(o.clone())
            }
            F.color.copy(w.color);
            A = 0;
            for (y = G.length; A < y; A++) {
                o = G[A], F.vertexColors.push(o.clone())
            }
            F.materials = w.materials.slice();
            F.centroid.copy(w.centroid);
            C.faces.push(F)
        }
        D = 0;
        for (B = x.length; D < B; D++) {
            z = x[D];
            F = [];
            A = 0;
            for (y = z.length; A < y; A++) {
                F.push(new THREE.UV(z[A].u, z[A].v))
            }
            C.faceVertexUvs[0].push(F)
        }
        return C
    },
    randomPointInTriangle: function (p, y, w) {
        var v, u, o, t = new THREE.Vector3,
            x = THREE.GeometryUtils.__v1;
        v = THREE.GeometryUtils.random();
        u = THREE.GeometryUtils.random();
        v + u > 1 && (v = 1 - v, u = 1 - u);
        o = 1 - v - u;
        t.copy(p);
        t.multiplyScalar(v);
        x.copy(y);
        x.multiplyScalar(u);
        t.addSelf(x);
        x.copy(w);
        x.multiplyScalar(o);
        t.addSelf(x);
        return t
    },
    randomPointInFace: function (o, w, v) {
        var u, t, n;
        if (o instanceof THREE.Face3) {
            return u = w.vertices[o.a].position, t = w.vertices[o.b].position, n = w.vertices[o.c].position, THREE.GeometryUtils.randomPointInTriangle(u, t, n)
        } else {
            if (o instanceof THREE.Face4) {
                u = w.vertices[o.a].position;
                t = w.vertices[o.b].position;
                n = w.vertices[o.c].position;
                var w = w.vertices[o.d].position,
                    p;
                v ? o._area1 && o._area2 ? (v = o._area1, p = o._area2) : (v = THREE.GeometryUtils.triangleArea(u, t, w), p = THREE.GeometryUtils.triangleArea(t, n, w), o._area1 = v, o._area2 = p) : (v = THREE.GeometryUtils.triangleArea(u, t, w), p = THREE.GeometryUtils.triangleArea(t, n, w));
                return THREE.GeometryUtils.random() * (v + p) < v ? THREE.GeometryUtils.randomPointInTriangle(u, t, w) : THREE.GeometryUtils.randomPointInTriangle(t, n, w)
            }
        }
    },
    randomPointsInGeometry: function (F, E) {
        function D(c) {
            function f(h, e) {
                if (e < h) {
                    return h
                }
                var b = h + Math.floor((e - h) / 2);
                return o[b] > c ? f(h, b - 1) : o[b] < c ? f(b + 1, e) : b
            }
            return f(0, o.length - 1)
        }
        var C, B, z = F.faces,
            A = F.vertices,
            y = z.length,
            J = 0,
            o = [],
            I, K, G, H;
        for (B = 0; B < y; B++) {
            C = z[B];
            if (C instanceof THREE.Face3) {
                I = A[C.a].position, K = A[C.b].position, G = A[C.c].position, C._area = THREE.GeometryUtils.triangleArea(I, K, G)
            } else {
                if (C instanceof THREE.Face4) {
                    I = A[C.a].position, K = A[C.b].position, G = A[C.c].position, H = A[C.d].position, C._area1 = THREE.GeometryUtils.triangleArea(I, K, H), C._area2 = THREE.GeometryUtils.triangleArea(K, G, H), C._area = C._area1 + C._area2
                }
            }
            J += C._area;
            o[B] = J
        }
        C = [];
        A = {};
        for (B = 0; B < E; B++) {
            y = THREE.GeometryUtils.random() * J, y = D(y), C[B] = THREE.GeometryUtils.randomPointInFace(z[y], F, !0), A[y] ? A[y] += 1 : A[y] = 1
        }
        return C
    },
    triangleArea: function (k, p, o) {
        var n, m = THREE.GeometryUtils.__v1;
        m.sub(k, p);
        n = m.length();
        m.sub(k, o);
        k = m.length();
        m.sub(p, o);
        o = m.length();
        p = 0.5 * (n + k + o);
        return Math.sqrt(p * (p - n) * (p - k) * (p - o))
    },
    random16: function () {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    }
};
THREE.GeometryUtils.random = THREE.GeometryUtils.random16;
THREE.GeometryUtils.__v1 = new THREE.Vector3;
THREE.ImageUtils = {
    loadTexture: function (k, p, o) {
        var n = new Image,
            m = new THREE.Texture(n, p);
        n.onload = function () {
            m.needsUpdate = !0;
            o && o(this)
        };
        n.crossOrigin = "";
        n.src = k;
        return m
    },
    loadTextureCube: function (n, u, t) {
        var p, o = [],
            k = new THREE.Texture(o, u),
            u = o.loadCount = 0;
        for (p = n.length; u < p; ++u) {
            o[u] = new Image, o[u].onload = function () {
                o.loadCount += 1;
                if (o.loadCount == 6) {
                    k.needsUpdate = !0
                }
                t && t(this)
            }, o[u].crossOrigin = "", o[u].src = n[u]
        }
        return k
    },
    getNormalMap: function (U, T) {
        var S = function (c) {
            var f = Math.sqrt(c[0] * c[0] + c[1] * c[1] + c[2] * c[2]);
            return [c[0] / f, c[1] / f, c[2] / f]
        };
        T |= 1;
        var R = U.width,
            Q = U.height,
            O = document.createElement("canvas");
        O.width = R;
        O.height = Q;
        var P = O.getContext("2d");
        P.drawImage(U, 0, 0);
        for (var N = P.getImageData(0, 0, R, Q).data, I = P.createImageData(R, Q), M = I.data, H = 0; H < R; H++) {
            for (var J = 1; J < Q; J++) {
                var C = J - 1 < 0 ? Q - 1 : J - 1,
                    E = (J + 1) % Q,
                    o = H - 1 < 0 ? R - 1 : H - 1,
                    A = (H + 1) % R,
                    L = [],
                    K = [0, 0, N[(J * R + H) * 4] / 255 * T];
                L.push([-1, 0, N[(J * R + o) * 4] / 255 * T]);
                L.push([-1, -1, N[(C * R + o) * 4] / 255 * T]);
                L.push([0, -1, N[(C * R + H) * 4] / 255 * T]);
                L.push([1, -1, N[(C * R + A) * 4] / 255 * T]);
                L.push([1, 0, N[(J * R + A) * 4] / 255 * T]);
                L.push([1, 1, N[(E * R + A) * 4] / 255 * T]);
                L.push([0, 1, N[(E * R + H) * 4] / 255 * T]);
                L.push([-1, 1, N[(E * R + o) * 4] / 255 * T]);
                C = [];
                o = L.length;
                for (E = 0; E < o; E++) {
                    var A = L[E],
                        F = L[(E + 1) % o],
                        A = [A[0] - K[0], A[1] - K[1], A[2] - K[2]],
                        F = [F[0] - K[0], F[1] - K[1], F[2] - K[2]];
                    C.push(S([A[1] * F[2] - A[2] * F[1], A[2] * F[0] - A[0] * F[2], A[0] * F[1] - A[1] * F[0]]))
                }
                L = [0, 0, 0];
                for (E = 0; E < C.length; E++) {
                    L[0] += C[E][0], L[1] += C[E][1], L[2] += C[E][2]
                }
                L[0] /= C.length;
                L[1] /= C.length;
                L[2] /= C.length;
                K = (J * R + H) * 4;
                M[K] = (L[0] + 1) / 2 * 255 | 0;
                M[K + 1] = (L[1] + 0.5) * 255 | 0;
                M[K + 2] = L[2] * 255 | 0;
                M[K + 3] = 255
            }
        }
        P.putImageData(I, 0, 0);
        return O
    }
};
THREE.SceneUtils = {
    showHierarchy: function (e, f) {
        THREE.SceneUtils.traverseHierarchy(e, function (c) {
            c.visible = f
        })
    },
    traverseHierarchy: function (k, p) {
        var o, n, m = k.children.length;
        for (n = 0; n < m; n++) {
            o = k.children[n], p(o), THREE.SceneUtils.traverseHierarchy(o, p)
        }
    }
};
if (THREE.WebGLRenderer) {
    THREE.ShaderUtils = {
        lib: {
            fresnel: {
                uniforms: {
                    mRefractionRatio: {
                        type: "f",
                        value: 1.02
                    },
                    mFresnelBias: {
                        type: "f",
                        value: 0.1
                    },
                    mFresnelPower: {
                        type: "f",
                        value: 2
                    },
                    mFresnelScale: {
                        type: "f",
                        value: 1
                    },
                    tCube: {
                        type: "t",
                        value: 1,
                        texture: null
                    }
                },
                fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
                vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
            },
            normal: {
                uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
                    enableAO: {
                        type: "i",
                        value: 0
                    },
                    enableDiffuse: {
                        type: "i",
                        value: 0
                    },
                    enableSpecular: {
                        type: "i",
                        value: 0
                    },
                    tDiffuse: {
                        type: "t",
                        value: 0,
                        texture: null
                    },
                    tNormal: {
                        type: "t",
                        value: 2,
                        texture: null
                    },
                    tSpecular: {
                        type: "t",
                        value: 3,
                        texture: null
                    },
                    tAO: {
                        type: "t",
                        value: 4,
                        texture: null
                    },
                    uNormalScale: {
                        type: "f",
                        value: 1
                    },
                    tDisplacement: {
                        type: "t",
                        value: 5,
                        texture: null
                    },
                    uDisplacementBias: {
                        type: "f",
                        value: 0
                    },
                    uDisplacementScale: {
                        type: "f",
                        value: 1
                    },
                    uDiffuseColor: {
                        type: "c",
                        value: new THREE.Color(15658734)
                    },
                    uSpecularColor: {
                        type: "c",
                        value: new THREE.Color(1118481)
                    },
                    uAmbientColor: {
                        type: "c",
                        value: new THREE.Color(328965)
                    },
                    uShininess: {
                        type: "f",
                        value: 30
                    },
                    uOpacity: {
                        type: "f",
                        value: 1
                    }
                }]),
                fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;", THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( 1.0 );\nvec4 mColor = vec4( uDiffuseColor, uOpacity );\nvec4 mSpecular = vec4( uSpecularColor, uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\nif( enableAO )\ngl_FragColor = gl_FragColor * texture2D( tAO, vUv );\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointTotal = vec4( vec3( 0.0 ), 1.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + viewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointTotal  += pointDistance * vec4( pointLightColor[ i ], 1.0 ) * ( mColor * pointDiffuseWeight + mSpecular * pointSpecularWeight * pointDiffuseWeight );\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirTotal = vec4( vec3( 0.0 ), 1.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirTotal  += vec4( directionalLightColor[ i ], 1.0 ) * ( mColor * dirDiffuseWeight + mSpecular * dirSpecularWeight * dirDiffuseWeight );\n}\n#endif\nvec4 totalLight = vec4( ambientLightColor * uAmbientColor, uOpacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirTotal;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointTotal;\n#endif\ngl_FragColor = gl_FragColor * totalLight;", THREE.ShaderChunk.fog_fragment, "}"].join("\n"),
                vertexShader: "attribute vec4 tangent;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvViewPosition = -mvPosition.xyz;\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"
            },
            cube: {
                uniforms: {
                    tCube: {
                        type: "t",
                        value: 1,
                        texture: null
                    }
                },
                vertexShader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
                fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"
            }
        }
    }
}
THREE.Curve = function () {};
THREE.Curve.prototype.getPoint = function () {
    console.log("Warning, getPoint() not implemented!");
    return null
};
THREE.Curve.prototype.getPointAt = function (c) {
    return this.getPoint(this.getUtoTmapping(c))
};
THREE.Curve.prototype.getPoints = function (f) {
    f || (f = 5);
    var k, h = [];
    for (k = 0; k <= f; k++) {
        h.push(this.getPoint(k / f))
    }
    return h
};
THREE.Curve.prototype.getSpacedPoints = function (f) {
    f || (f = 5);
    var k, h = [];
    for (k = 0; k <= f; k++) {
        h.push(this.getPointAt(k / f))
    }
    return h
};
THREE.Curve.prototype.getLength = function () {
    var c = this.getLengths();
    return c[c.length - 1]
};
THREE.Curve.prototype.getLengths = function (n) {
    n || (n = 200);
    if (this.cacheArcLengths && this.cacheArcLengths.length == n + 1) {
        return this.cacheArcLengths
    }
    var u = [],
        t, p = this.getPoint(0),
        o, k = 0;
    u.push(0);
    for (o = 1; o <= n; o++) {
        t = this.getPoint(o / n), k += t.distanceTo(p), u.push(k), p = t
    }
    return this.cacheArcLengths = u
};
THREE.Curve.prototype.getUtoTmapping = function (z, y) {
    var x = this.getLengths(),
        w = 0,
        v = x.length,
        p;
    p = y ? y : z * x[v - 1];
    time = Date.now();
    for (var t = 0, o = v - 1, A; t <= o;) {
        if (w = Math.floor(t + (o - t) / 2), A = x[w] - p, A < 0) {
            t = w + 1
        } else {
            if (A > 0) {
                o = w - 1
            } else {
                o = w;
                break
            }
        }
    }
    w = o;
    if (x[w] == p) {
        return w / (v - 1)
    }
    t = x[w];
    return x = (w + (p - t) / (x[w + 1] - t)) / (v - 1)
};
THREE.Curve.prototype.getNormalVector = function (c) {
    c = this.getTangent(c);
    return new THREE.Vector2(-c.y, c.x)
};
THREE.Curve.prototype.getTangent = function (f) {
    var k = f - 0.0001;
    f += 0.0001;
    k < 0 && (k = 0);
    f > 1 && (f = 1);
    var k = this.getPoint(k),
        f = this.getPoint(f),
        h = new THREE.Vector2;
    h.sub(f, k);
    return h.unit()
};
THREE.LineCurve = function (e, f) {
    e instanceof THREE.Vector2 ? (this.v1 = e, this.v2 = f) : THREE.LineCurve.oldConstructor.apply(this, arguments)
};
THREE.LineCurve.oldConstructor = function (h, n, m, k) {
    this.constructor(new THREE.Vector2(h, n), new THREE.Vector2(m, k))
};
THREE.LineCurve.prototype = new THREE.Curve;
THREE.LineCurve.prototype.constructor = THREE.LineCurve;
THREE.LineCurve.prototype.getPoint = function (e) {
    var f = new THREE.Vector2;
    f.sub(this.v2, this.v1);
    f.multiplyScalar(e).addSelf(this.v1);
    return f
};
THREE.LineCurve.prototype.getPointAt = function (c) {
    return this.getPoint(c)
};
THREE.LineCurve.prototype.getTangent = function () {
    var c = new THREE.Vector2;
    c.sub(this.v2, this.v1);
    c.normalize();
    return c
};
THREE.QuadraticBezierCurve = function (h, n, m) {
    if (!(n instanceof THREE.Vector2)) {
        var k = Array.prototype.slice.call(arguments),
            h = new THREE.Vector2(k[0], k[1]),
            n = new THREE.Vector2(k[2], k[3]),
            m = new THREE.Vector2(k[4], k[5])
    }
    this.v0 = h;
    this.v1 = n;
    this.v2 = m
};
THREE.QuadraticBezierCurve.prototype = new THREE.Curve;
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint = function (e) {
    var f;
    f = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x);
    e = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y);
    return new THREE.Vector2(f, e)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function (e) {
    var f;
    f = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x);
    e = THREE.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y);
    f = new THREE.Vector2(f, e);
    f.normalize();
    return f
};
THREE.CubicBezierCurve = function (k, p, o, n) {
    if (!(p instanceof THREE.Vector2)) {
        var m = Array.prototype.slice.call(arguments),
            k = new THREE.Vector2(m[0], m[1]),
            p = new THREE.Vector2(m[2], m[3]),
            o = new THREE.Vector2(m[4], m[5]),
            n = new THREE.Vector2(m[6], m[7])
    }
    this.v0 = k;
    this.v1 = p;
    this.v2 = o;
    this.v3 = n
};
THREE.CubicBezierCurve.prototype = new THREE.Curve;
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;
THREE.CubicBezierCurve.prototype.getPoint = function (e) {
    var f;
    f = THREE.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    e = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    return new THREE.Vector2(f, e)
};
THREE.CubicBezierCurve.prototype.getTangent = function (e) {
    var f;
    f = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    e = THREE.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    f = new THREE.Vector2(f, e);
    f.normalize();
    return f
};
THREE.SplineCurve = function (c) {
    this.points = c
};
THREE.SplineCurve.prototype = new THREE.Curve;
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint = function (k) {
    var p = new THREE.Vector2,
        o = [],
        n = this.points,
        m;
    m = (n.length - 1) * k;
    k = Math.floor(m);
    m -= k;
    o[0] = k == 0 ? k : k - 1;
    o[1] = k;
    o[2] = k > n.length - 2 ? k : k + 1;
    o[3] = k > n.length - 3 ? k : k + 2;
    p.x = THREE.Curve.Utils.interpolate(n[o[0]].x, n[o[1]].x, n[o[2]].x, n[o[3]].x, m);
    p.y = THREE.Curve.Utils.interpolate(n[o[0]].y, n[o[1]].y, n[o[2]].y, n[o[3]].y, m);
    return p
};
THREE.ArcCurve = function (n, u, t, p, o, k) {
    this.aX = n;
    this.aY = u;
    this.aRadius = t;
    this.aStartAngle = p;
    this.aEndAngle = o;
    this.aClockwise = k
};
THREE.ArcCurve.prototype = new THREE.Curve;
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
THREE.ArcCurve.prototype.getPoint = function (e) {
    var f = this.aEndAngle - this.aStartAngle;
    this.aClockwise || (e = 1 - e);
    e = this.aStartAngle + e * f;
    return new THREE.Vector2(this.aX + this.aRadius * Math.cos(e), this.aY + this.aRadius * Math.sin(e))
};
THREE.Curve.Utils = {
    tangentQuadraticBezier: function (h, n, m, k) {
        return 2 * (1 - h) * (m - n) + 2 * h * (k - m)
    },
    tangentCubicBezier: function (k, p, o, n, m) {
        return -3 * p * (1 - k) * (1 - k) + 3 * o * (1 - k) * (1 - k) - 6 * k * o * (1 - k) + 6 * k * n * (1 - k) - 3 * k * k * n + 3 * k * k * m
    },
    tangentSpline: function (c) {
        return 6 * c * c - 6 * c + (3 * c * c - 4 * c + 1) + (-6 * c * c + 6 * c) + (3 * c * c - 2 * c)
    },
    interpolate: function (n, u, t, p, o) {
        var n = (t - n) * 0.5,
            p = (p - u) * 0.5,
            k = o * o;
        return (2 * u - 2 * t + n + p) * o * k + (-3 * u + 3 * t - 2 * n - p) * k + n * o + u
    }
};
THREE.Curve.create = function (e, f) {
    e.prototype = new THREE.Curve;
    e.prototype.constructor = e;
    e.prototype.getPoint = f;
    return e
};
THREE.LineCurve3 = THREE.Curve.create(function (e, f) {
    this.v1 = e;
    this.v2 = f
}, function (e) {
    var f = new THREE.Vector3;
    f.sub(v2, v1);
    f.multiplyScalar(e);
    f.addSelf(this.v1);
    return f
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (f, k, h) {
    this.v0 = f;
    this.v1 = k;
    this.v2 = h
}, function (f) {
    var k, h;
    k = THREE.Shape.Utils.b2(f, this.v0.x, this.v1.x, this.v2.x);
    h = THREE.Shape.Utils.b2(f, this.v0.y, this.v1.y, this.v2.y);
    f = THREE.Shape.Utils.b2(f, this.v0.z, this.v1.z, this.v2.z);
    return new THREE.Vector3(k, h, f)
});
THREE.CurvePath = function () {
    this.curves = [];
    this.bends = []
};
THREE.CurvePath.prototype = new THREE.Curve;
THREE.CurvePath.prototype.constructor = THREE.CurvePath;
THREE.CurvePath.prototype.add = function (c) {
    this.curves.push(c)
};
THREE.CurvePath.prototype.checkConnection = function () {};
THREE.CurvePath.prototype.closePath = function () {};
THREE.CurvePath.prototype.getPoint = function (f) {
    for (var k = f * this.getLength(), h = this.getCurveLengths(), f = 0; f < h.length;) {
        if (h[f] >= k) {
            return k = h[f] - k, f = this.curves[f], k = 1 - k / f.getLength(), f.getPointAt(k)
        }
        f++
    }
    return null
};
THREE.CurvePath.prototype.getLength = function () {
    var c = this.getCurveLengths();
    return c[c.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function () {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) {
        return this.cacheLengths
    }
    var h = [],
        n = 0,
        m, k = this.curves.length;
    for (m = 0; m < k; m++) {
        n += this.curves[m].getLength(), h.push(n)
    }
    return this.cacheLengths = h
};
THREE.CurvePath.prototype.getBoundingBox = function () {
    var z = this.getPoints(),
        y, x, w, v;
    y = x = Number.NEGATIVE_INFINITY;
    w = v = Number.POSITIVE_INFINITY;
    var p, t, o, A;
    A = new THREE.Vector2;
    t = 0;
    for (o = z.length; t < o; t++) {
        p = z[t];
        if (p.x > y) {
            y = p.x
        } else {
            if (p.x < w) {
                w = p.x
            }
        }
        if (p.y > x) {
            x = p.y
        } else {
            if (p.y < x) {
                v = p.y
            }
        }
        A.addSelf(p.x, p.y)
    }
    return {
        minX: w,
        minY: v,
        maxX: y,
        maxY: x,
        centroid: A.divideScalar(o)
    }
};
THREE.CurvePath.prototype.createPointsGeometry = function (c) {
    return this.createGeometry(this.getPoints(c, !0))
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function (c) {
    return this.createGeometry(this.getSpacedPoints(c, !0))
};
THREE.CurvePath.prototype.createGeometry = function (f) {
    for (var k = new THREE.Geometry, h = 0; h < f.length; h++) {
        k.vertices.push(new THREE.Vertex(new THREE.Vector3(f[h].x, f[h].y, 0)))
    }
    return k
};
THREE.CurvePath.prototype.addWrapPath = function (c) {
    this.bends.push(c)
};
THREE.CurvePath.prototype.getTransformedPoints = function (k, p) {
    var o = this.getPoints(k),
        n, m;
    if (!p) {
        p = this.bends
    }
    n = 0;
    for (m = p.length; n < m; n++) {
        o = this.getWrapPoints(o, p[n])
    }
    return o
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function (k, p) {
    var o = this.getSpacedPoints(k),
        n, m;
    if (!p) {
        p = this.bends
    }
    n = 0;
    for (m = p.length; n < m; n++) {
        o = this.getWrapPoints(o, p[n])
    }
    return o
};
THREE.CurvePath.prototype.getWrapPoints = function (z, y) {
    var x = this.getBoundingBox(),
        w, v, p, t, o, A;
    w = 0;
    for (v = z.length; w < v; w++) {
        p = z[w], t = p.x, o = p.y, A = t / x.maxX, A = y.getUtoTmapping(A, t), t = y.getPoint(A), o = y.getNormalVector(A).multiplyScalar(o), p.x = t.x + o.x, p.y = t.y + o.y
    }
    return z
};
THREE.Path = function (c) {
    THREE.CurvePath.call(this);
    this.actions = [];
    c && this.fromPoints(c)
};
THREE.Path.prototype = new THREE.CurvePath;
THREE.Path.prototype.constructor = THREE.Path;
THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc"
};
THREE.Path.prototype.fromPoints = function (f) {
    this.moveTo(f[0].x, f[0].y);
    var k, h = f.length;
    for (k = 1; k < h; k++) {
        this.lineTo(f[k].x, f[k].y)
    }
};
THREE.Path.prototype.moveTo = function () {
    var c = Array.prototype.slice.call(arguments);
    this.actions.push({
        action: THREE.PathActions.MOVE_TO,
        args: c
    })
};
THREE.Path.prototype.lineTo = function (h, n) {
    var m = Array.prototype.slice.call(arguments),
        k = this.actions[this.actions.length - 1].args;
    this.curves.push(new THREE.LineCurve(new THREE.Vector2(k[k.length - 2], k[k.length - 1]), new THREE.Vector2(h, n)));
    this.actions.push({
        action: THREE.PathActions.LINE_TO,
        args: m
    })
};
THREE.Path.prototype.quadraticCurveTo = function (n, u, t, p) {
    var o = Array.prototype.slice.call(arguments),
        k = this.actions[this.actions.length - 1].args;
    this.curves.push(new THREE.QuadraticBezierCurve(new THREE.Vector2(k[k.length - 2], k[k.length - 1]), new THREE.Vector2(n, u), new THREE.Vector2(t, p)));
    this.actions.push({
        action: THREE.PathActions.QUADRATIC_CURVE_TO,
        args: o
    })
};
THREE.Path.prototype.bezierCurveTo = function (p, y, w, v, u, o) {
    var t = Array.prototype.slice.call(arguments),
        x = this.actions[this.actions.length - 1].args;
    this.curves.push(new THREE.CubicBezierCurve(new THREE.Vector2(x[x.length - 2], x[x.length - 1]), new THREE.Vector2(p, y), new THREE.Vector2(w, v), new THREE.Vector2(u, o)));
    this.actions.push({
        action: THREE.PathActions.BEZIER_CURVE_TO,
        args: t
    })
};
THREE.Path.prototype.splineThru = function (f) {
    var k = Array.prototype.slice.call(arguments),
        h = this.actions[this.actions.length - 1].args,
        h = [new THREE.Vector2(h[h.length - 2], h[h.length - 1])],
        h = h.concat(f);
    this.curves.push(new THREE.SplineCurve(h));
    this.actions.push({
        action: THREE.PathActions.CSPLINE_THRU,
        args: k
    })
};
THREE.Path.prototype.arc = function (o, w, v, u, t, n) {
    var p = Array.prototype.slice.call(arguments);
    this.curves.push(new THREE.ArcCurve(o, w, v, u, t, n));
    this.actions.push({
        action: THREE.PathActions.ARC,
        args: p
    })
};
THREE.Path.prototype.getSpacedPoints = function (f) {
    f || (f = 40);
    for (var k = [], h = 0; h < f; h++) {
        k.push(this.getPoint(h / f))
    }
    return k
};
THREE.Path.prototype.getPoints = function (L, J) {
    var L = L || 12,
        H = [],
        G, F, D, E, C, P, A, O, Q, M, N, I, K;
    G = 0;
    for (F = this.actions.length; G < F; G++) {
        switch (D = this.actions[G], E = D.action, D = D.args, E) {
            case THREE.PathActions.LINE_TO:
                H.push(new THREE.Vector2(D[0], D[1]));
                break;
            case THREE.PathActions.QUADRATIC_CURVE_TO:
                C = D[2];
                P = D[3];
                Q = D[0];
                M = D[1];
                H.length > 0 ? (E = H[H.length - 1], N = E.x, I = E.y) : (E = this.actions[G - 1].args, N = E[E.length - 2], I = E[E.length - 1]);
                for (E = 1; E <= L; E++) {
                    K = E / L, D = THREE.Shape.Utils.b2(K, N, Q, C), K = THREE.Shape.Utils.b2(K, I, M, P), H.push(new THREE.Vector2(D, K))
                }
                break;
            case THREE.PathActions.BEZIER_CURVE_TO:
                C = D[4];
                P = D[5];
                Q = D[0];
                M = D[1];
                A = D[2];
                O = D[3];
                H.length > 0 ? (E = H[H.length - 1], N = E.x, I = E.y) : (E = this.actions[G - 1].args, N = E[E.length - 2], I = E[E.length - 1]);
                for (E = 1; E <= L; E++) {
                    K = E / L, D = THREE.Shape.Utils.b3(K, N, Q, A, C), K = THREE.Shape.Utils.b3(K, I, M, O, P), H.push(new THREE.Vector2(D, K))
                }
                break;
            case THREE.PathActions.CSPLINE_THRU:
                E = this.actions[G - 1].args;
                E = [new THREE.Vector2(E[E.length - 2], E[E.length - 1])];
                K = L * D[0].length;
                E = E.concat(D[0]);
                D = new THREE.SplineCurve(E);
                for (E = 1; E <= K; E++) {
                    H.push(D.getPointAt(E / K))
                }
                break;
            case THREE.PathActions.ARC:
                E = this.actions[G - 1].args;
                C = D[0];
                P = D[1];
                A = D[2];
                Q = D[3];
                K = D[4];
                M = !! D[5];
                O = E[E.length - 2];
                N = E[E.length - 1];
                E.length == 0 && (O = N = 0);
                I = K - Q;
                var o = L * 2;
                for (E = 1; E <= o; E++) {
                    K = E / o, M || (K = 1 - K), K = Q + K * I, D = O + C + A * Math.cos(K), K = N + P + A * Math.sin(K), H.push(new THREE.Vector2(D, K))
                }
        }
    }
    J && H.push(H[0]);
    return H
};
THREE.Path.prototype.transform = function (e, f) {
    this.getBoundingBox();
    return this.getWrapPoints(this.getPoints(f), e)
};
THREE.Path.prototype.nltransform = function (D, C, B, A, z, x) {
    var y = this.getPoints(),
        w, F, o, E, G;
    w = 0;
    for (F = y.length; w < F; w++) {
        o = y[w], E = o.x, G = o.y, o.x = D * E + C * G + B, o.y = A * G + z * E + x
    }
    return y
};
THREE.Path.prototype.debug = function (k) {
    var p = this.getBoundingBox();
    k || (k = document.createElement("canvas"), k.setAttribute("width", p.maxX + 100), k.setAttribute("height", p.maxY + 100), document.body.appendChild(k));
    p = k.getContext("2d");
    p.fillStyle = "white";
    p.fillRect(0, 0, k.width, k.height);
    p.strokeStyle = "black";
    p.beginPath();
    var o, n, m, k = 0;
    for (o = this.actions.length; k < o; k++) {
        n = this.actions[k], m = n.args, n = n.action, n != THREE.PathActions.CSPLINE_THRU && p[n].apply(p, m)
    }
    p.stroke();
    p.closePath();
    p.strokeStyle = "red";
    n = this.getPoints();
    k = 0;
    for (o = n.length; k < o; k++) {
        m = n[k], p.beginPath(), p.arc(m.x, m.y, 1.5, 0, Math.PI * 2, !1), p.stroke(), p.closePath()
    }
};
THREE.Path.prototype.toShapes = function () {
    var o, w, v, u, t = [],
        n = new THREE.Path;
    o = 0;
    for (w = this.actions.length; o < w; o++) {
        v = this.actions[o], u = v.args, v = v.action, v == THREE.PathActions.MOVE_TO && n.actions.length != 0 && (t.push(n), n = new THREE.Path), n[v].apply(n, u)
    }
    n.actions.length != 0 && t.push(n);
    if (t.length == 0) {
        return []
    }
    var p, n = [];
    if (THREE.Shape.Utils.isClockWise(t[0].getPoints())) {
        o = 0;
        for (w = t.length; o < w; o++) {
            u = t[o], THREE.Shape.Utils.isClockWise(u.getPoints()) ? (p && n.push(p), p = new THREE.Shape, p.actions = u.actions, p.curves = u.curves) : p.holes.push(u)
        }
        n.push(p)
    } else {
        p = new THREE.Shape;
        o = 0;
        for (w = t.length; o < w; o++) {
            u = t[o], THREE.Shape.Utils.isClockWise(u.getPoints()) ? (p.actions = u.actions, p.curves = u.curves, n.push(p), p = new THREE.Shape) : p.holes.push(u)
        }
    }
    return n
};
THREE.Shape = function () {
    THREE.Path.apply(this, arguments);
    this.holes = []
};
THREE.Shape.prototype = new THREE.Path;
THREE.Shape.prototype.constructor = THREE.Path;
THREE.Shape.prototype.extrude = function (c) {
    return new THREE.ExtrudeGeometry(this, c)
};
THREE.Shape.prototype.getPointsHoles = function (h) {
    var n, m = this.holes.length,
        k = [];
    for (n = 0; n < m; n++) {
        k[n] = this.holes[n].getTransformedPoints(h, this.bends)
    }
    return k
};
THREE.Shape.prototype.getSpacedPointsHoles = function (h) {
    var n, m = this.holes.length,
        k = [];
    for (n = 0; n < m; n++) {
        k[n] = this.holes[n].getTransformedSpacedPoints(h, this.bends)
    }
    return k
};
THREE.Shape.prototype.extractAllPoints = function (c) {
    return {
        shape: this.getTransformedPoints(c),
        holes: this.getPointsHoles(c)
    }
};
THREE.Shape.prototype.extractAllSpacedPoints = function (c) {
    return {
        shape: this.getTransformedSpacedPoints(c),
        holes: this.getSpacedPointsHoles(c)
    }
};
THREE.Shape.Utils = {
    removeHoles: function (L, J) {
        var H = L.concat(),
            G = H.concat(),
            F, D, E, C, P, A, O, Q, M, N, I = [];
        for (P = 0; P < J.length; P++) {
            A = J[P];
            G = G.concat(A);
            D = Number.POSITIVE_INFINITY;
            for (F = 0; F < A.length; F++) {
                M = A[F];
                N = [];
                for (Q = 0; Q < H.length; Q++) {
                    O = H[Q], O = M.distanceToSquared(O), N.push(O), O < D && (D = O, E = F, C = Q)
                }
            }
            F = C - 1 >= 0 ? C - 1 : H.length - 1;
            D = E - 1 >= 0 ? E - 1 : A.length - 1;
            var K = [A[E], H[C], H[F]];
            Q = THREE.FontUtils.Triangulate.area(K);
            var o = [A[E], A[D], H[C]];
            M = THREE.FontUtils.Triangulate.area(o);
            N = C;
            O = E;
            C += 1;
            E += -1;
            C < 0 && (C += H.length);
            C %= H.length;
            E < 0 && (E += A.length);
            E %= A.length;
            F = C - 1 >= 0 ? C - 1 : H.length - 1;
            D = E - 1 >= 0 ? E - 1 : A.length - 1;
            K = [A[E], H[C], H[F]];
            K = THREE.FontUtils.Triangulate.area(K);
            o = [A[E], A[D], H[C]];
            o = THREE.FontUtils.Triangulate.area(o);
            Q + M > K + o && (C = N, E = O, C < 0 && (C += H.length), C %= H.length, E < 0 && (E += A.length), E %= A.length, F = C - 1 >= 0 ? C - 1 : H.length - 1, D = E - 1 >= 0 ? E - 1 : A.length - 1);
            Q = H.slice(0, C);
            M = H.slice(C);
            N = A.slice(E);
            O = A.slice(0, E);
            D = [A[E], A[D], H[C]];
            I.push([A[E], H[C], H[F]]);
            I.push(D);
            H = Q.concat(N).concat(O).concat(M)
        }
        return {
            shape: H,
            isolatedPts: I,
            allpoints: G
        }
    },
    triangulateShape: function (B, A) {
        var z = THREE.Shape.Utils.removeHoles(B, A),
            y = z.allpoints,
            x = z.isolatedPts,
            z = THREE.FontUtils.Triangulate(z.shape, !1),
            v, w, t, C, o = {};
        v = 0;
        for (w = y.length; v < w; v++) {
            C = y[v].x + ":" + y[v].y, o[C] !== void 0 && console.log("Duplicate point", C), o[C] = v
        }
        v = 0;
        for (w = z.length; v < w; v++) {
            t = z[v];
            for (y = 0; y < 3; y++) {
                C = t[y].x + ":" + t[y].y, C = o[C], C !== void 0 && (t[y] = C)
            }
        }
        v = 0;
        for (w = x.length; v < w; v++) {
            t = x[v];
            for (y = 0; y < 3; y++) {
                C = t[y].x + ":" + t[y].y, C = o[C], C !== void 0 && (t[y] = C)
            }
        }
        return z.concat(x)
    },
    isClockWise: function (c) {
        return THREE.FontUtils.Triangulate.area(c) < 0
    },
    b2p0: function (f, k) {
        var h = 1 - f;
        return h * h * k
    },
    b2p1: function (e, f) {
        return 2 * (1 - e) * e * f
    },
    b2p2: function (e, f) {
        return e * e * f
    },
    b2: function (h, n, m, k) {
        return this.b2p0(h, n) + this.b2p1(h, m) + this.b2p2(h, k)
    },
    b3p0: function (f, k) {
        var h = 1 - f;
        return h * h * h * k
    },
    b3p1: function (f, k) {
        var h = 1 - f;
        return 3 * h * h * f * k
    },
    b3p2: function (e, f) {
        return 3 * (1 - e) * e * e * f
    },
    b3p3: function (e, f) {
        return e * e * e * f
    },
    b3: function (k, p, o, n, m) {
        return this.b3p0(k, p) + this.b3p1(k, o) + this.b3p2(k, n) + this.b3p3(k, m)
    }
};
THREE.TextPath = function (e, f) {
    THREE.Path.call(this);
    this.parameters = f || {};
    this.set(e)
};
THREE.TextPath.prototype.set = function (n, u) {
    this.text = n;
    var u = u || this.parameters,
        t = u.curveSegments !== void 0 ? u.curveSegments : 4,
        p = u.font !== void 0 ? u.font : "helvetiker",
        o = u.weight !== void 0 ? u.weight : "normal",
        k = u.style !== void 0 ? u.style : "normal";
    THREE.FontUtils.size = u.size !== void 0 ? u.size : 100;
    THREE.FontUtils.divisions = t;
    THREE.FontUtils.face = p;
    THREE.FontUtils.weight = o;
    THREE.FontUtils.style = k
};
THREE.TextPath.prototype.toShapes = function () {
    for (var h = THREE.FontUtils.drawText(this.text).paths, n = [], m = 0, k = h.length; m < k; m++) {
        n = n.concat(h[m].toShapes())
    }
    return n
};
THREE.AnimationHandler = function () {
    var h = [],
        n = {}, m = {
            update: function (b) {
                for (var f = 0; f < h.length; f++) {
                    h[f].update(b)
                }
            },
            addToUpdate: function (b) {
                h.indexOf(b) === -1 && h.push(b)
            },
            removeFromUpdate: function (b) {
                b = h.indexOf(b);
                b !== -1 && h.splice(b, 1)
            },
            add: function (c) {
                n[c.name] !== void 0 && console.log("THREE.AnimationHandler.add: Warning! " + c.name + " already exists in library. Overwriting.");
                n[c.name] = c;
                if (c.initialized !== !0) {
                    for (var y = 0; y < c.hierarchy.length; y++) {
                        for (var w = 0; w < c.hierarchy[y].keys.length; w++) {
                            if (c.hierarchy[y].keys[w].time < 0) {
                                c.hierarchy[y].keys[w].time = 0
                            }
                            if (c.hierarchy[y].keys[w].rot !== void 0 && !(c.hierarchy[y].keys[w].rot instanceof THREE.Quaternion)) {
                                var z = c.hierarchy[y].keys[w].rot;
                                c.hierarchy[y].keys[w].rot = new THREE.Quaternion(z[0], z[1], z[2], z[3])
                            }
                        }
                        if (c.hierarchy[y].keys[0].morphTargets !== void 0) {
                            z = {};
                            for (w = 0; w < c.hierarchy[y].keys.length; w++) {
                                for (var t = 0; t < c.hierarchy[y].keys[w].morphTargets.length; t++) {
                                    var x = c.hierarchy[y].keys[w].morphTargets[t];
                                    z[x] = -1
                                }
                            }
                            c.hierarchy[y].usedMorphTargets = z;
                            for (w = 0; w < c.hierarchy[y].keys.length; w++) {
                                var o = {};
                                for (x in z) {
                                    for (t = 0; t < c.hierarchy[y].keys[w].morphTargets.length; t++) {
                                        if (c.hierarchy[y].keys[w].morphTargets[t] === x) {
                                            o[x] = c.hierarchy[y].keys[w].morphTargetsInfluences[t];
                                            break
                                        }
                                    }
                                    t === c.hierarchy[y].keys[w].morphTargets.length && (o[x] = 0)
                                }
                                c.hierarchy[y].keys[w].morphTargetsInfluences = o
                            }
                        }
                        for (w = 1; w < c.hierarchy[y].keys.length; w++) {
                            c.hierarchy[y].keys[w].time === c.hierarchy[y].keys[w - 1].time && (c.hierarchy[y].keys.splice(w, 1), w--)
                        }
                        for (w = 1; w < c.hierarchy[y].keys.length; w++) {
                            c.hierarchy[y].keys[w].index = w
                        }
                    }
                    w = parseInt(c.length * c.fps, 10);
                    c.JIT = {};
                    c.JIT.hierarchy = [];
                    for (y = 0; y < c.hierarchy.length; y++) {
                        c.JIT.hierarchy.push(Array(w))
                    }
                    c.initialized = !0
                }
            },
            get: function (c) {
                if (typeof c === "string") {
                    return n[c] ? n[c] : (console.log("THREE.AnimationHandler.get: Couldn't find animation " + c), null)
                }
            },
            parse: function (f) {
                var o = [];
                if (f instanceof THREE.SkinnedMesh) {
                    for (var p = 0; p < f.bones.length; p++) {
                        o.push(f.bones[p])
                    }
                } else {
                    k(f, o)
                }
                return o
            }
        }, k = function (f, o) {
            o.push(f);
            for (var p = 0; p < f.children.length; p++) {
                k(f.children[p], o)
            }
        };
    m.LINEAR = 0;
    m.CATMULLROM = 1;
    m.CATMULLROM_FORWARD = 2;
    return m
}();
THREE.Animation = function (h, n, m, k) {
    this.root = h;
    this.data = THREE.AnimationHandler.get(n);
    this.hierarchy = THREE.AnimationHandler.parse(h);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.interpolationType = m !== void 0 ? m : THREE.AnimationHandler.LINEAR;
    this.JITCompile = k !== void 0 ? k : !0;
    this.points = [];
    this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function (n, u) {
    if (!this.isPlaying) {
        this.isPlaying = !0;
        this.loop = n !== void 0 ? n : !0;
        this.currentTime = u !== void 0 ? u : 0;
        var t, p = this.hierarchy.length,
            o;
        for (t = 0; t < p; t++) {
            o = this.hierarchy[t];
            if (this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD) {
                o.useQuaternion = !0
            }
            o.matrixAutoUpdate = !0;
            if (o.animationCache === void 0) {
                o.animationCache = {}, o.animationCache.prevKey = {
                    pos: 0,
                    rot: 0,
                    scl: 0
                }, o.animationCache.nextKey = {
                    pos: 0,
                    rot: 0,
                    scl: 0
                }, o.animationCache.originalMatrix = o instanceof THREE.Bone ? o.skinMatrix : o.matrix
            }
            var k = o.animationCache.prevKey;
            o = o.animationCache.nextKey;
            k.pos = this.data.hierarchy[t].keys[0];
            k.rot = this.data.hierarchy[t].keys[0];
            k.scl = this.data.hierarchy[t].keys[0];
            o.pos = this.getNextKeyWith("pos", t, 1);
            o.rot = this.getNextKeyWith("rot", t, 1);
            o.scl = this.getNextKeyWith("scl", t, 1)
        }
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function () {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function () {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this);
    for (var c = 0; c < this.hierarchy.length; c++) {
        if (this.hierarchy[c].animationCache !== void 0) {
            this.hierarchy[c] instanceof THREE.Bone ? this.hierarchy[c].skinMatrix = this.hierarchy[c].animationCache.originalMatrix : this.hierarchy[c].matrix = this.hierarchy[c].animationCache.originalMatrix, delete this.hierarchy[c].animationCache
        }
    }
};
THREE.Animation.prototype.update = function (J) {
    if (this.isPlaying) {
        var H = ["pos", "rot", "scl"],
            F, E, D, B, C, A, N, o, M = this.data.JIT.hierarchy,
            O, K;
        this.currentTime += J * this.timeScale;
        K = this.currentTime;
        O = this.currentTime %= this.data.length;
        o = parseInt(Math.min(O * this.data.fps, this.data.length * this.data.fps), 10);
        for (var L = 0, G = this.hierarchy.length; L < G; L++) {
            if (J = this.hierarchy[L], N = J.animationCache, this.JITCompile && M[L][o] !== void 0) {
                J instanceof THREE.Bone ? (J.skinMatrix = M[L][o], J.matrixAutoUpdate = !1, J.matrixWorldNeedsUpdate = !1) : (J.matrix = M[L][o], J.matrixAutoUpdate = !1, J.matrixWorldNeedsUpdate = !0)
            } else {
                if (this.JITCompile) {
                    J instanceof THREE.Bone ? J.skinMatrix = J.animationCache.originalMatrix : J.matrix = J.animationCache.originalMatrix
                }
                for (var I = 0; I < 3; I++) {
                    F = H[I];
                    C = N.prevKey[F];
                    A = N.nextKey[F];
                    if (A.time <= K) {
                        if (O < K) {
                            if (this.loop) {
                                C = this.data.hierarchy[L].keys[0];
                                for (A = this.getNextKeyWith(F, L, 1); A.time < O;) {
                                    C = A, A = this.getNextKeyWith(F, L, A.index + 1)
                                }
                            } else {
                                this.stop();
                                return
                            }
                        } else {
                            do {
                                C = A, A = this.getNextKeyWith(F, L, A.index + 1)
                            } while (A.time < O)
                        }
                        N.prevKey[F] = C;
                        N.nextKey[F] = A
                    }
                    J.matrixAutoUpdate = !0;
                    J.matrixWorldNeedsUpdate = !0;
                    E = (O - C.time) / (A.time - C.time);
                    D = C[F];
                    B = A[F];
                    if (E < 0 || E > 1) {
                        console.log("THREE.Animation.update: Warning! Scale out of bounds:" + E + " on bone " + L), E = E < 0 ? 0 : 1
                    }
                    if (F === "pos") {
                        if (F = J.position, this.interpolationType === THREE.AnimationHandler.LINEAR) {
                            F.x = D[0] + (B[0] - D[0]) * E, F.y = D[1] + (B[1] - D[1]) * E, F.z = D[2] + (B[2] - D[2]) * E
                        } else {
                            if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
                                if (this.points[0] = this.getPrevKeyWith("pos", L, C.index - 1).pos, this.points[1] = D, this.points[2] = B, this.points[3] = this.getNextKeyWith("pos", L, A.index + 1).pos, E = E * 0.33 + 0.33, D = this.interpolateCatmullRom(this.points, E), F.x = D[0], F.y = D[1], F.z = D[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
                                    E = this.interpolateCatmullRom(this.points, E * 1.01), this.target.set(E[0], E[1], E[2]), this.target.subSelf(F), this.target.y = 0, this.target.normalize(), E = Math.atan2(this.target.x, this.target.z), J.rotation.set(0, E, 0)
                                }
                            }
                        }
                    } else {
                        if (F === "rot") {
                            THREE.Quaternion.slerp(D, B, J.quaternion, E)
                        } else {
                            if (F === "scl") {
                                F = J.scale, F.x = D[0] + (B[0] - D[0]) * E, F.y = D[1] + (B[1] - D[1]) * E, F.z = D[2] + (B[2] - D[2]) * E
                            }
                        }
                    }
                }
            }
        }
        if (this.JITCompile && M[0][o] === void 0) {
            this.hierarchy[0].update(void 0, !0);
            for (L = 0; L < this.hierarchy.length; L++) {
                M[L][o] = this.hierarchy[L] instanceof THREE.Bone ? this.hierarchy[L].skinMatrix.clone() : this.hierarchy[L].matrix.clone()
            }
        }
    }
};
THREE.Animation.prototype.interpolateCatmullRom = function (B, A) {
    var z = [],
        y = [],
        x, v, w, t, C, o;
    x = (B.length - 1) * A;
    v = Math.floor(x);
    x -= v;
    z[0] = v == 0 ? v : v - 1;
    z[1] = v;
    z[2] = v > B.length - 2 ? v : v + 1;
    z[3] = v > B.length - 3 ? v : v + 2;
    v = B[z[0]];
    t = B[z[1]];
    C = B[z[2]];
    o = B[z[3]];
    z = x * x;
    w = x * z;
    y[0] = this.interpolate(v[0], t[0], C[0], o[0], x, z, w);
    y[1] = this.interpolate(v[1], t[1], C[1], o[1], x, z, w);
    y[2] = this.interpolate(v[2], t[2], C[2], o[2], x, z, w);
    return y
};
THREE.Animation.prototype.interpolate = function (o, w, v, u, t, n, p) {
    o = (v - o) * 0.5;
    u = (u - w) * 0.5;
    return (2 * (w - v) + o + u) * p + (-3 * (w - v) - 2 * o - u) * n + o * t + w
};
THREE.Animation.prototype.getNextKeyWith = function (h, n, m) {
    var k = this.data.hierarchy[n].keys;
    for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? m = m < k.length - 1 ? m : k.length - 1 : m %= k.length; m < k.length; m++) {
        if (k[m][h] !== void 0) {
            return k[m]
        }
    }
    return this.data.hierarchy[n].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function (h, n, m) {
    for (var k = this.data.hierarchy[n].keys, m = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? m > 0 ? m : 0 : m >= 0 ? m : m + k.length; m >= 0; m--) {
        if (k[m][h] !== void 0) {
            return k[m]
        }
    }
    return this.data.hierarchy[n].keys[k.length - 1]
};
THREE.FirstPersonCamera = function (e) {
    function f(h, k) {
        return function () {
            k.apply(h, arguments)
        }
    }
    THREE.Camera.call(this, e.fov, e.aspect, e.near, e.far, e.target);
    this.movementSpeed = 1;
    this.lookSpeed = 0.005;
    this.noFly = !1;
    this.lookVertical = !0;
    this.autoForward = !1;
    this.activeLook = !0;
    this.heightSpeed = !1;
    this.heightCoef = 1;
    this.heightMin = 0;
    this.constrainVertical = !1;
    this.verticalMin = 0;
    this.verticalMax = 3.14;
    this.domElement = document;
    this.lastUpdate = (new Date).getTime();
    this.tdiff = 0;
    if (e) {
        if (e.movementSpeed !== void 0) {
            this.movementSpeed = e.movementSpeed
        }
        if (e.lookSpeed !== void 0) {
            this.lookSpeed = e.lookSpeed
        }
        if (e.noFly !== void 0) {
            this.noFly = e.noFly
        }
        if (e.lookVertical !== void 0) {
            this.lookVertical = e.lookVertical
        }
        if (e.autoForward !== void 0) {
            this.autoForward = e.autoForward
        }
        if (e.activeLook !== void 0) {
            this.activeLook = e.activeLook
        }
        if (e.heightSpeed !== void 0) {
            this.heightSpeed = e.heightSpeed
        }
        if (e.heightCoef !== void 0) {
            this.heightCoef = e.heightCoef
        }
        if (e.heightMin !== void 0) {
            this.heightMin = e.heightMin
        }
        if (e.heightMax !== void 0) {
            this.heightMax = e.heightMax
        }
        if (e.constrainVertical !== void 0) {
            this.constrainVertical = e.constrainVertical
        }
        if (e.verticalMin !== void 0) {
            this.verticalMin = e.verticalMin
        }
        if (e.verticalMax !== void 0) {
            this.verticalMax = e.verticalMax
        }
        if (e.domElement !== void 0) {
            this.domElement = e.domElement
        }
    }
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor = 0;
    this.mouseDragOn = this.freeze = this.moveRight = this.moveLeft = this.moveBackward = this.moveForward = !1;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.onMouseDown = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.activeLook) {
            switch (c.button) {
                case 0:
                    this.moveForward = !0;
                    break;
                case 2:
                    this.moveBackward = !0
            }
        }
        this.mouseDragOn = !0
    };
    this.onMouseUp = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.activeLook) {
            switch (c.button) {
                case 0:
                    this.moveForward = !1;
                    break;
                case 2:
                    this.moveBackward = !1
            }
        }
        this.mouseDragOn = !1
    };
    this.onMouseMove = function (c) {
        this.mouseX = c.clientX - this.windowHalfX;
        this.mouseY = c.clientY - this.windowHalfY
    };
    this.onKeyDown = function (c) {
        switch (c.keyCode) {
            case 38:
            case 87:
                this.moveForward = !0;
                break;
            case 37:
            case 65:
                this.moveLeft = !0;
                break;
            case 40:
            case 83:
                this.moveBackward = !0;
                break;
            case 39:
            case 68:
                this.moveRight = !0;
                break;
            case 82:
                this.moveUp = !0;
                break;
            case 70:
                this.moveDown = !0;
                break;
            case 81:
                this.freeze = !this.freeze
        }
    };
    this.onKeyUp = function (c) {
        switch (c.keyCode) {
            case 38:
            case 87:
                this.moveForward = !1;
                break;
            case 37:
            case 65:
                this.moveLeft = !1;
                break;
            case 40:
            case 83:
                this.moveBackward = !1;
                break;
            case 39:
            case 68:
                this.moveRight = !1;
                break;
            case 82:
                this.moveUp = !1;
                break;
            case 70:
                this.moveDown = !1
        }
    };
    this.update = function () {
        var k = (new Date).getTime();
        this.tdiff = (k - this.lastUpdate) / 1000;
        this.lastUpdate = k;
        if (!this.freeze) {
            this.autoSpeedFactor = this.heightSpeed ? this.tdiff * ((this.position.y < this.heightMin ? this.heightMin : this.position.y > this.heightMax ? this.heightMax : this.position.y) - this.heightMin) * this.heightCoef : 0;
            var n = this.tdiff * this.movementSpeed;
            (this.moveForward || this.autoForward && !this.moveBackward) && this.translateZ(-(n + this.autoSpeedFactor));
            this.moveBackward && this.translateZ(n);
            this.moveLeft && this.translateX(-n);
            this.moveRight && this.translateX(n);
            this.moveUp && this.translateY(n);
            this.moveDown && this.translateY(-n);
            n = this.tdiff * this.lookSpeed;
            this.activeLook || (n = 0);
            this.lon += this.mouseX * n;
            this.lookVertical && (this.lat -= this.mouseY * n);
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi = (90 - this.lat) * Math.PI / 180;
            this.theta = this.lon * Math.PI / 180;
            var k = this.target.position,
                m = this.position;
            k.x = m.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
            k.y = m.y + 100 * Math.cos(this.phi);
            k.z = m.z + 100 * Math.sin(this.phi) * Math.sin(this.theta)
        }
        k = 1;
        this.constrainVertical && (k = 3.14 / (this.verticalMax - this.verticalMin));
        this.lon += this.mouseX * n;
        this.lookVertical && (this.lat -= this.mouseY * n * k);
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * Math.PI / 180;
        this.theta = this.lon * Math.PI / 180;
        if (this.constrainVertical) {
            this.phi = (this.phi - 0) * (this.verticalMax - this.verticalMin) / 3.14 + this.verticalMin
        }
        k = this.target.position;
        m = this.position;
        k.x = m.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
        k.y = m.y + 100 * Math.cos(this.phi);
        k.z = m.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.supr.update.call(this)
    };
    this.domElement.addEventListener("contextmenu", function (c) {
        c.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", f(this, this.onMouseMove), !1);
    this.domElement.addEventListener("mousedown", f(this, this.onMouseDown), !1);
    this.domElement.addEventListener("mouseup", f(this, this.onMouseUp), !1);
    this.domElement.addEventListener("keydown", f(this, this.onKeyDown), !1);
    this.domElement.addEventListener("keyup", f(this, this.onKeyUp), !1)
};
THREE.FirstPersonCamera.prototype = new THREE.Camera;
THREE.FirstPersonCamera.prototype.constructor = THREE.FirstPersonCamera;
THREE.FirstPersonCamera.prototype.supr = THREE.Camera.prototype;
THREE.FirstPersonCamera.prototype.translate = function (e, f) {
    this.matrix.rotateAxis(f);
    if (this.noFly) {
        f.y = 0
    }
    this.position.addSelf(f.multiplyScalar(e));
    this.target.position.addSelf(f.multiplyScalar(e))
};
THREE.PathCamera = function (z) {
    function y(J, H, I, F) {
        var D = {
            name: I,
            fps: 0.6,
            length: F,
            hierarchy: []
        }, E, C = H.getControlPointsArray(),
            B = H.getLength(),
            L = C.length,
            K = 0;
        E = L - 1;
        H = {
            parent: -1,
            keys: []
        };
        H.keys[0] = {
            time: 0,
            pos: C[0],
            rot: [0, 0, 0, 1],
            scl: [1, 1, 1]
        };
        H.keys[E] = {
            time: F,
            pos: C[E],
            rot: [0, 0, 0, 1],
            scl: [1, 1, 1]
        };
        for (E = 1; E < L - 1; E++) {
            K = F * B.chunks[E] / B.total, H.keys[E] = {
                time: K,
                pos: C[E]
            }
        }
        D.hierarchy[0] = H;
        THREE.AnimationHandler.add(D);
        return new THREE.Animation(J, I, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
    }
    function x(h, u) {
        var B, n, m = new THREE.Geometry;
        for (B = 0; B < h.points.length * u; B++) {
            n = B / (h.points.length * u), n = h.getPoint(n), m.vertices[B] = new THREE.Vertex(new THREE.Vector3(n.x, n.y, n.z))
        }
        return m
    }
    function w(e, B) {
        var u = x(B, 10),
            m = x(B, 10),
            n = new THREE.LineBasicMaterial({
                color: 16711680,
                linewidth: 3
            });
        lineObj = new THREE.Line(u, n);
        particleObj = new THREE.ParticleSystem(m, new THREE.ParticleBasicMaterial({
            color: 16755200,
            size: 3
        }));
        lineObj.scale.set(1, 1, 1);
        e.addChild(lineObj);
        particleObj.scale.set(1, 1, 1);
        e.addChild(particleObj);
        m = new THREE.SphereGeometry(1, 16, 8);
        n = new THREE.MeshBasicMaterial({
            color: 65280
        });
        for (i = 0; i < B.points.length; i++) {
            u = new THREE.Mesh(m, n), u.position.copy(B.points[i]), u.updateMatrix(), e.addChild(u)
        }
    }
    THREE.Camera.call(this, z.fov, z.aspect, z.near, z.far, z.target);
    this.id = "PathCamera" + THREE.PathCameraIdCounter++;
    this.duration = 10000;
    this.waypoints = [];
    this.useConstantSpeed = !0;
    this.resamplingCoef = 50;
    this.debugPath = new THREE.Object3D;
    this.debugDummy = new THREE.Object3D;
    this.animationParent = new THREE.Object3D;
    this.lookSpeed = 0.005;
    this.lookHorizontal = this.lookVertical = !0;
    this.verticalAngleMap = {
        srcRange: [0, 6.28],
        dstRange: [0, 6.28]
    };
    this.horizontalAngleMap = {
        srcRange: [0, 6.28],
        dstRange: [0, 6.28]
    };
    this.domElement = document;
    if (z) {
        if (z.duration !== void 0) {
            this.duration = z.duration * 1000
        }
        if (z.waypoints !== void 0) {
            this.waypoints = z.waypoints
        }
        if (z.useConstantSpeed !== void 0) {
            this.useConstantSpeed = z.useConstantSpeed
        }
        if (z.resamplingCoef !== void 0) {
            this.resamplingCoef = z.resamplingCoef
        }
        if (z.createDebugPath !== void 0) {
            this.createDebugPath = z.createDebugPath
        }
        if (z.createDebugDummy !== void 0) {
            this.createDebugDummy = z.createDebugDummy
        }
        if (z.lookSpeed !== void 0) {
            this.lookSpeed = z.lookSpeed
        }
        if (z.lookVertical !== void 0) {
            this.lookVertical = z.lookVertical
        }
        if (z.lookHorizontal !== void 0) {
            this.lookHorizontal = z.lookHorizontal
        }
        if (z.verticalAngleMap !== void 0) {
            this.verticalAngleMap = z.verticalAngleMap
        }
        if (z.horizontalAngleMap !== void 0) {
            this.horizontalAngleMap = z.horizontalAngleMap
        }
        if (z.domElement !== void 0) {
            this.domElement = z.domElement
        }
    }
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = 0;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    var v = Math.PI * 2,
        p = Math.PI / 180;
    this.update = function (h, B, D) {
        var u, m;
        this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed);
        this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed);
        this.lon = Math.max(0, Math.min(360, this.lon));
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * p;
        this.theta = this.lon * p;
        u = this.phi % v;
        this.phi = u >= 0 ? u : u + v;
        u = this.verticalAngleMap.srcRange;
        m = this.verticalAngleMap.dstRange;
        var C = m[1] - m[0];
        this.phi = TWEEN.Easing.Quadratic.EaseInOut(((this.phi - u[0]) * (m[1] - m[0]) / (u[1] - u[0]) + m[0] - m[0]) / C) * C + m[0];
        u = this.horizontalAngleMap.srcRange;
        m = this.horizontalAngleMap.dstRange;
        C = m[1] - m[0];
        this.theta = TWEEN.Easing.Quadratic.EaseInOut(((this.theta - u[0]) * (m[1] - m[0]) / (u[1] - u[0]) + m[0] - m[0]) / C) * C + m[0];
        u = this.target.position;
        u.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
        u.y = 100 * Math.cos(this.phi);
        u.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.supr.update.call(this, h, B, D)
    };
    this.onMouseMove = function (c) {
        this.mouseX = c.clientX - this.windowHalfX;
        this.mouseY = c.clientY - this.windowHalfY
    };
    this.spline = new THREE.Spline;
    this.spline.initFromArray(this.waypoints);
    this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
    if (this.createDebugDummy) {
        var z = new THREE.MeshLambertMaterial({
            color: 30719
        }),
            t = new THREE.MeshLambertMaterial({
                color: 65280
            }),
            o = new THREE.CubeGeometry(10, 10, 20),
            A = new THREE.CubeGeometry(2, 2, 10);
        this.animationParent = new THREE.Mesh(o, z);
        z = new THREE.Mesh(A, t);
        z.position.set(0, 10, 0);
        this.animation = y(this.animationParent, this.spline, this.id, this.duration);
        this.animationParent.addChild(this);
        this.animationParent.addChild(this.target);
        this.animationParent.addChild(z)
    } else {
        this.animation = y(this.animationParent, this.spline, this.id, this.duration), this.animationParent.addChild(this.target), this.animationParent.addChild(this)
    }
    this.createDebugPath && w(this.debugPath, this.spline);
    this.domElement.addEventListener("mousemove", function (c, f) {
        return function () {
            f.apply(c, arguments)
        }
    }(this, this.onMouseMove), !1)
};
THREE.PathCamera.prototype = new THREE.Camera;
THREE.PathCamera.prototype.constructor = THREE.PathCamera;
THREE.PathCamera.prototype.supr = THREE.Camera.prototype;
THREE.PathCameraIdCounter = 0;
THREE.FlyCamera = function (e) {
    function f(h, k) {
        return function () {
            k.apply(h, arguments)
        }
    }
    THREE.Camera.call(this, e.fov, e.aspect, e.near, e.far, e.target);
    this.tmpQuaternion = new THREE.Quaternion;
    this.movementSpeed = 1;
    this.rollSpeed = 0.005;
    this.autoForward = this.dragToLook = !1;
    this.domElement = document;
    if (e) {
        if (e.movementSpeed !== void 0) {
            this.movementSpeed = e.movementSpeed
        }
        if (e.rollSpeed !== void 0) {
            this.rollSpeed = e.rollSpeed
        }
        if (e.dragToLook !== void 0) {
            this.dragToLook = e.dragToLook
        }
        if (e.autoForward !== void 0) {
            this.autoForward = e.autoForward
        }
        if (e.domElement !== void 0) {
            this.domElement = e.domElement
        }
    }
    this.useTarget = !1;
    this.useQuaternion = !0;
    this.mouseStatus = 0;
    this.moveState = {
        up: 0,
        down: 0,
        left: 0,
        right: 0,
        forward: 0,
        back: 0,
        pitchUp: 0,
        pitchDown: 0,
        yawLeft: 0,
        yawRight: 0,
        rollLeft: 0,
        rollRight: 0
    };
    this.moveVector = new THREE.Vector3(0, 0, 0);
    this.rotationVector = new THREE.Vector3(0, 0, 0);
    this.lastUpdate = -1;
    this.tdiff = 0;
    this.handleEvent = function (c) {
        if (typeof this[c.type] == "function") {
            this[c.type](c)
        }
    };
    this.keydown = function (c) {
        if (!c.altKey) {
            switch (c.keyCode) {
                case 16:
                    this.movementSpeedMultiplier = 0.1;
                    break;
                case 87:
                    this.moveState.forward = 1;
                    break;
                case 83:
                    this.moveState.back = 1;
                    break;
                case 65:
                    this.moveState.left = 1;
                    break;
                case 68:
                    this.moveState.right = 1;
                    break;
                case 82:
                    this.moveState.up = 1;
                    break;
                case 70:
                    this.moveState.down = 1;
                    break;
                case 38:
                    this.moveState.pitchUp = 1;
                    break;
                case 40:
                    this.moveState.pitchDown = 1;
                    break;
                case 37:
                    this.moveState.yawLeft = 1;
                    break;
                case 39:
                    this.moveState.yawRight = 1;
                    break;
                case 81:
                    this.moveState.rollLeft = 1;
                    break;
                case 69:
                    this.moveState.rollRight = 1
            }
            this.updateMovementVector();
            this.updateRotationVector()
        }
    };
    this.keyup = function (c) {
        switch (c.keyCode) {
            case 16:
                this.movementSpeedMultiplier = 1;
                break;
            case 87:
                this.moveState.forward = 0;
                break;
            case 83:
                this.moveState.back = 0;
                break;
            case 65:
                this.moveState.left = 0;
                break;
            case 68:
                this.moveState.right = 0;
                break;
            case 82:
                this.moveState.up = 0;
                break;
            case 70:
                this.moveState.down = 0;
                break;
            case 38:
                this.moveState.pitchUp = 0;
                break;
            case 40:
                this.moveState.pitchDown = 0;
                break;
            case 37:
                this.moveState.yawLeft = 0;
                break;
            case 39:
                this.moveState.yawRight = 0;
                break;
            case 81:
                this.moveState.rollLeft = 0;
                break;
            case 69:
                this.moveState.rollRight = 0
        }
        this.updateMovementVector();
        this.updateRotationVector()
    };
    this.mousedown = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.dragToLook) {
            this.mouseStatus++
        } else {
            switch (c.button) {
                case 0:
                    this.moveForward = !0;
                    break;
                case 2:
                    this.moveBackward = !0
            }
        }
    };
    this.mousemove = function (n) {
        if (!this.dragToLook || this.mouseStatus > 0) {
            var p = this.getContainerDimensions(),
                o = p.size[0] / 2,
                k = p.size[1] / 2;
            this.moveState.yawLeft = -(n.clientX - p.offset[0] - o) / o;
            this.moveState.pitchDown = (n.clientY - p.offset[1] - k) / k;
            this.updateRotationVector()
        }
    };
    this.mouseup = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.dragToLook) {
            this.mouseStatus--, this.moveState.yawLeft = this.moveState.pitchDown = 0
        } else {
            switch (c.button) {
                case 0:
                    this.moveForward = !1;
                    break;
                case 2:
                    this.moveBackward = !1
            }
        }
        this.updateRotationVector()
    };
    this.update = function () {
        var h = (new Date).getTime();
        if (this.lastUpdate == -1) {
            this.lastUpdate = h
        }
        this.tdiff = (h - this.lastUpdate) / 1000;
        this.lastUpdate = h;
        var h = this.tdiff * this.movementSpeed,
            k = this.tdiff * this.rollSpeed;
        this.translateX(this.moveVector.x * h);
        this.translateY(this.moveVector.y * h);
        this.translateZ(this.moveVector.z * h);
        this.tmpQuaternion.set(this.rotationVector.x * k, this.rotationVector.y * k, this.rotationVector.z * k, 1).normalize();
        this.quaternion.multiplySelf(this.tmpQuaternion);
        this.matrix.setPosition(this.position);
        this.matrix.setRotationFromQuaternion(this.quaternion);
        this.matrixWorldNeedsUpdate = !0;
        this.supr.update.call(this)
    };
    this.updateMovementVector = function () {
        var c = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;
        this.moveVector.x = -this.moveState.left + this.moveState.right;
        this.moveVector.y = -this.moveState.down + this.moveState.up;
        this.moveVector.z = -c + this.moveState.back
    };
    this.updateRotationVector = function () {
        this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
        this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
        this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft
    };
    this.getContainerDimensions = function () {
        return this.domElement != document ? {
            size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
            offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
        } : {
            size: [window.innerWidth, window.innerHeight],
            offset: [0, 0]
        }
    };
    this.domElement.addEventListener("mousemove", f(this, this.mousemove), !1);
    this.domElement.addEventListener("mousedown", f(this, this.mousedown), !1);
    this.domElement.addEventListener("mouseup", f(this, this.mouseup), !1);
    window.addEventListener("keydown", f(this, this.keydown), !1);
    window.addEventListener("keyup", f(this, this.keyup), !1);
    this.updateMovementVector();
    this.updateRotationVector()
};
THREE.FlyCamera.prototype = new THREE.Camera;
THREE.FlyCamera.prototype.constructor = THREE.FlyCamera;
THREE.FlyCamera.prototype.supr = THREE.Camera.prototype;
THREE.RollCamera = function (L, J, H, G) {
    THREE.Camera.call(this, L, J, H, G);
    this.mouseLook = !0;
    this.autoForward = !1;
    this.rollSpeed = this.movementSpeed = this.lookSpeed = 1;
    this.constrainVertical = [-0.9, 0.9];
    this.domElement = document;
    this.matrixAutoUpdate = this.useTarget = !1;
    this.forward = new THREE.Vector3(0, 0, 1);
    this.roll = 0;
    this.lastUpdate = -1;
    this.delta = 0;
    var F = new THREE.Vector3,
        D = new THREE.Vector3,
        E = new THREE.Vector3,
        C = new THREE.Matrix4,
        P = !1,
        A = 1,
        O = 0,
        Q = 0,
        M = 0,
        N = 0,
        I = 0,
        K = window.innerWidth / 2,
        o = window.innerHeight / 2;
    this.update = function () {
        var c = (new Date).getTime();
        if (this.lastUpdate == -1) {
            this.lastUpdate = c
        }
        this.delta = (c - this.lastUpdate) / 1000;
        this.lastUpdate = c;
        this.mouseLook && (c = this.delta * this.lookSpeed, this.rotateHorizontally(c * N), this.rotateVertically(c * I));
        c = this.delta * this.movementSpeed;
        this.translateZ(c * (O > 0 || this.autoForward && !(O < 0) ? 1 : O));
        this.translateX(c * Q);
        this.translateY(c * M);
        P && (this.roll += this.rollSpeed * this.delta * A);
        if (this.forward.y > this.constrainVertical[1]) {
            this.forward.y = this.constrainVertical[1], this.forward.normalize()
        } else {
            if (this.forward.y < this.constrainVertical[0]) {
                this.forward.y = this.constrainVertical[0], this.forward.normalize()
            }
        }
        E.copy(this.forward);
        D.set(0, 1, 0);
        F.cross(D, E).normalize();
        D.cross(E, F).normalize();
        this.matrix.n11 = F.x;
        this.matrix.n12 = D.x;
        this.matrix.n13 = E.x;
        this.matrix.n21 = F.y;
        this.matrix.n22 = D.y;
        this.matrix.n23 = E.y;
        this.matrix.n31 = F.z;
        this.matrix.n32 = D.z;
        this.matrix.n33 = E.z;
        C.identity();
        C.n11 = Math.cos(this.roll);
        C.n12 = -Math.sin(this.roll);
        C.n21 = Math.sin(this.roll);
        C.n22 = Math.cos(this.roll);
        this.matrix.multiplySelf(C);
        this.matrixWorldNeedsUpdate = !0;
        this.matrix.n14 = this.position.x;
        this.matrix.n24 = this.position.y;
        this.matrix.n34 = this.position.z;
        this.supr.update.call(this)
    };
    this.translateX = function (c) {
        this.position.x += this.matrix.n11 * c;
        this.position.y += this.matrix.n21 * c;
        this.position.z += this.matrix.n31 * c
    };
    this.translateY = function (c) {
        this.position.x += this.matrix.n12 * c;
        this.position.y += this.matrix.n22 * c;
        this.position.z += this.matrix.n32 * c
    };
    this.translateZ = function (c) {
        this.position.x -= this.matrix.n13 * c;
        this.position.y -= this.matrix.n23 * c;
        this.position.z -= this.matrix.n33 * c
    };
    this.rotateHorizontally = function (c) {
        F.set(this.matrix.n11, this.matrix.n21, this.matrix.n31);
        F.multiplyScalar(c);
        this.forward.subSelf(F);
        this.forward.normalize()
    };
    this.rotateVertically = function (c) {
        D.set(this.matrix.n12, this.matrix.n22, this.matrix.n32);
        D.multiplyScalar(c);
        this.forward.addSelf(D);
        this.forward.normalize()
    };
    this.domElement.addEventListener("contextmenu", function (c) {
        c.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", function (c) {
        N = (c.clientX - K) / window.innerWidth;
        I = (c.clientY - o) / window.innerHeight
    }, !1);
    this.domElement.addEventListener("mousedown", function (c) {
        c.preventDefault();
        c.stopPropagation();
        switch (c.button) {
            case 0:
                O = 1;
                break;
            case 2:
                O = -1
        }
    }, !1);
    this.domElement.addEventListener("mouseup", function (c) {
        c.preventDefault();
        c.stopPropagation();
        switch (c.button) {
            case 0:
                O = 0;
                break;
            case 2:
                O = 0
        }
    }, !1);
    this.domElement.addEventListener("keydown", function (c) {
        switch (c.keyCode) {
            case 38:
            case 87:
                O = 1;
                break;
            case 37:
            case 65:
                Q = -1;
                break;
            case 40:
            case 83:
                O = -1;
                break;
            case 39:
            case 68:
                Q = 1;
                break;
            case 81:
                P = !0;
                A = 1;
                break;
            case 69:
                P = !0;
                A = -1;
                break;
            case 82:
                M = 1;
                break;
            case 70:
                M = -1
        }
    }, !1);
    this.domElement.addEventListener("keyup", function (c) {
        switch (c.keyCode) {
            case 38:
            case 87:
                O = 0;
                break;
            case 37:
            case 65:
                Q = 0;
                break;
            case 40:
            case 83:
                O = 0;
                break;
            case 39:
            case 68:
                Q = 0;
                break;
            case 81:
                P = !1;
                break;
            case 69:
                P = !1;
                break;
            case 82:
                M = 0;
                break;
            case 70:
                M = 0
        }
    }, !1)
};
THREE.RollCamera.prototype = new THREE.Camera;
THREE.RollCamera.prototype.constructor = THREE.RollCamera;
THREE.RollCamera.prototype.supr = THREE.Camera.prototype;
THREE.TrackballCamera = function (C) {
    function B(e, f) {
        return function () {
            f.apply(e, arguments)
        }
    }
    C = C || {};
    THREE.Camera.call(this, C.fov, C.aspect, C.near, C.far, C.target);
    this.domElement = C.domElement || document;
    this.screen = C.screen || {
        width: window.innerWidth,
        height: window.innerHeight,
        offsetLeft: 0,
        offsetTop: 0
    };
    this.radius = C.radius || (this.screen.width + this.screen.height) / 4;
    this.rotateSpeed = C.rotateSpeed || 1;
    this.zoomSpeed = C.zoomSpeed || 1.2;
    this.panSpeed = C.panSpeed || 0.3;
    this.noZoom = C.noZoom || !1;
    this.noPan = C.noPan || !1;
    this.staticMoving = C.staticMoving || !1;
    this.dynamicDampingFactor = C.dynamicDampingFactor || 0.2;
    this.minDistance = C.minDistance || 0;
    this.maxDistance = C.maxDistance || Infinity;
    this.keys = C.keys || [65, 83, 68];
    this.useTarget = !0;
    var A = !1,
        z = this.STATE.NONE,
        y = new THREE.Vector3,
        w = new THREE.Vector3,
        x = new THREE.Vector3,
        t = new THREE.Vector2,
        E = new THREE.Vector2,
        o = new THREE.Vector2,
        D = new THREE.Vector2;
    this.handleEvent = function (c) {
        if (typeof this[c.type] == "function") {
            this[c.type](c)
        }
    };
    this.getMouseOnScreen = function (e, f) {
        return new THREE.Vector2((e - this.screen.offsetLeft) / this.radius * 0.5, (f - this.screen.offsetTop) / this.radius * 0.5)
    };
    this.getMouseProjectionOnBall = function (h, n) {
        var m = new THREE.Vector3((h - this.screen.width * 0.5 - this.screen.offsetLeft) / this.radius, (this.screen.height * 0.5 + this.screen.offsetTop - n) / this.radius, 0),
            k = m.length();
        k > 1 ? m.normalize() : m.z = Math.sqrt(1 - k * k);
        y = this.position.clone().subSelf(this.target.position);
        k = this.up.clone().setLength(m.y);
        k.addSelf(this.up.clone().crossSelf(y).setLength(m.x));
        k.addSelf(y.setLength(m.z));
        return k
    };
    this.rotateCamera = function () {
        var f = Math.acos(w.dot(x) / w.length() / x.length());
        if (f) {
            var k = (new THREE.Vector3).cross(w, x).normalize(),
                h = new THREE.Quaternion;
            f *= this.rotateSpeed;
            h.setFromAxisAngle(k, -f);
            h.multiplyVector3(y);
            h.multiplyVector3(this.up);
            h.multiplyVector3(x);
            this.staticMoving ? w = x : (h.setFromAxisAngle(k, f * (this.dynamicDampingFactor - 1)), h.multiplyVector3(w))
        }
    };
    this.zoomCamera = function () {
        var c = 1 + (E.y - t.y) * this.zoomSpeed;
        c !== 1 && c > 0 && (y.multiplyScalar(c), this.staticMoving ? t = E : t.y += (E.y - t.y) * this.dynamicDampingFactor)
    };
    this.panCamera = function () {
        var e = D.clone().subSelf(o);
        if (e.lengthSq()) {
            e.multiplyScalar(y.length() * this.panSpeed);
            var f = y.clone().crossSelf(this.up).setLength(e.x);
            f.addSelf(this.up.clone().setLength(e.y));
            this.position.addSelf(f);
            this.target.position.addSelf(f);
            this.staticMoving ? o = D : o.addSelf(e.sub(D, o).multiplyScalar(this.dynamicDampingFactor))
        }
    };
    this.checkDistances = function () {
        if (!this.noZoom || !this.noPan) {
            this.position.lengthSq() > this.maxDistance * this.maxDistance && this.position.setLength(this.maxDistance), y.lengthSq() < this.minDistance * this.minDistance && this.position.add(this.target.position, y.setLength(this.minDistance))
        }
    };
    this.update = function (f, k, h) {
        y = this.position.clone().subSelf(this.target.position);
        this.rotateCamera();
        this.noZoom || this.zoomCamera();
        this.noPan || this.panCamera();
        this.position.add(this.target.position, y);
        this.checkDistances();
        this.supr.update.call(this, f, k, h)
    };
    this.domElement.addEventListener("contextmenu", function (c) {
        c.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", B(this, function (c) {
        A && (w = x = this.getMouseProjectionOnBall(c.clientX, c.clientY), t = E = this.getMouseOnScreen(c.clientX, c.clientY), o = D = this.getMouseOnScreen(c.clientX, c.clientY), A = !1);
        z !== this.STATE.NONE && (z === this.STATE.ROTATE ? x = this.getMouseProjectionOnBall(c.clientX, c.clientY) : z === this.STATE.ZOOM && !this.noZoom ? E = this.getMouseOnScreen(c.clientX, c.clientY) : z === this.STATE.PAN && !this.noPan && (D = this.getMouseOnScreen(c.clientX, c.clientY)))
    }), !1);
    this.domElement.addEventListener("mousedown", B(this, function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (z === this.STATE.NONE) {
            z = c.button, z === this.STATE.ROTATE ? w = x = this.getMouseProjectionOnBall(c.clientX, c.clientY) : z === this.STATE.ZOOM && !this.noZoom ? t = E = this.getMouseOnScreen(c.clientX, c.clientY) : this.noPan || (o = D = this.getMouseOnScreen(c.clientX, c.clientY))
        }
    }), !1);
    this.domElement.addEventListener("mouseup", B(this, function (c) {
        c.preventDefault();
        c.stopPropagation();
        z = this.STATE.NONE
    }), !1);
    window.addEventListener("keydown", B(this, function (c) {
        if (z === this.STATE.NONE) {
            if (c.keyCode === this.keys[this.STATE.ROTATE]) {
                z = this.STATE.ROTATE
            } else {
                if (c.keyCode === this.keys[this.STATE.ZOOM] && !this.noZoom) {
                    z = this.STATE.ZOOM
                } else {
                    if (c.keyCode === this.keys[this.STATE.PAN] && !this.noPan) {
                        z = this.STATE.PAN
                    }
                }
            }
            z !== this.STATE.NONE && (A = !0)
        }
    }), !1);
    window.addEventListener("keyup", B(this, function () {
        if (z !== this.STATE.NONE) {
            z = this.STATE.NONE
        }
    }), !1)
};
THREE.TrackballCamera.prototype = new THREE.Camera;
THREE.TrackballCamera.prototype.constructor = THREE.TrackballCamera;
THREE.TrackballCamera.prototype.supr = THREE.Camera.prototype;
THREE.TrackballCamera.prototype.STATE = {
    NONE: -1,
    ROTATE: 0,
    ZOOM: 1,
    PAN: 2
};
THREE.QuakeCamera = THREE.FirstPersonCamera;
THREE.CubeGeometry = function (J, H, F, E, D, B, C, A, N) {
    function o(ah, ag, af, ae, ad, ab, aa, Z) {
        var Y, X, V = E || 1,
            U = D || 1,
            Q = ad / 2,
            h = ab / 2,
            v = M.vertices.length;
        if (ah == "x" && ag == "y" || ah == "y" && ag == "x") {
            Y = "z"
        } else {
            if (ah == "x" && ag == "z" || ah == "z" && ag == "x") {
                Y = "y", U = B || 1
            } else {
                if (ah == "z" && ag == "y" || ah == "y" && ag == "z") {
                    Y = "x", V = B || 1
                }
            }
        }
        var ac = V + 1,
            f = U + 1;
        ad /= V;
        var T = ab / U;
        for (X = 0; X < f; X++) {
            for (ab = 0; ab < ac; ab++) {
                var m = new THREE.Vector3;
                m[ah] = (ab * ad - Q) * af;
                m[ag] = (X * T - h) * ae;
                m[Y] = aa;
                M.vertices.push(new THREE.Vertex(m))
            }
        }
        for (X = 0; X < U; X++) {
            for (ab = 0; ab < V; ab++) {
                M.faces.push(new THREE.Face4(ab + ac * X + v, ab + ac * (X + 1) + v, ab + 1 + ac * (X + 1) + v, ab + 1 + ac * X + v, null, null, Z)), M.faceVertexUvs[0].push([new THREE.UV(ab / V, X / U), new THREE.UV(ab / V, (X + 1) / U), new THREE.UV((ab + 1) / V, (X + 1) / U), new THREE.UV((ab + 1) / V, X / U)])
            }
        }
    }
    THREE.Geometry.call(this);
    var M = this,
        O = J / 2,
        K = H / 2,
        L = F / 2,
        A = A ? -1 : 1;
    if (C !== void 0) {
        if (C instanceof Array) {
            this.materials = C
        } else {
            this.materials = [];
            for (var G = 0; G < 6; G++) {
                this.materials.push([C])
            }
        }
    } else {
        this.materials = []
    }
    this.sides = {
        px: !0,
        nx: !0,
        py: !0,
        ny: !0,
        pz: !0,
        nz: !0
    };
    if (N != void 0) {
        for (var I in N) {
            this.sides[I] != void 0 && (this.sides[I] = N[I])
        }
    }
    this.sides.px && o("z", "y", 1 * A, -1, F, H, -O, this.materials[0]);
    this.sides.nx && o("z", "y", -1 * A, -1, F, H, O, this.materials[1]);
    this.sides.py && o("x", "z", 1 * A, 1, J, F, K, this.materials[2]);
    this.sides.ny && o("x", "z", 1 * A, -1, J, F, -K, this.materials[3]);
    this.sides.pz && o("x", "y", 1 * A, -1, J, H, L, this.materials[4]);
    this.sides.nz && o("x", "y", -1 * A, -1, J, H, -L, this.materials[5]);
    (function () {
        for (var Q = [], P = [], z = 0, y = M.vertices.length; z < y; z++) {
            for (var w = M.vertices[z], x = !1, v = 0, u = Q.length; v < u; v++) {
                var t = Q[v];
                if (w.position.x == t.position.x && w.position.y == t.position.y && w.position.z == t.position.z) {
                    P[z] = v;
                    x = !0;
                    break
                }
            }
            if (!x) {
                P[z] = Q.length, Q.push(new THREE.Vertex(w.position.clone()))
            }
        }
        z = 0;
        for (y = M.faces.length; z < y; z++) {
            w = M.faces[z], w.a = P[w.a], w.b = P[w.b], w.c = P[w.c], w.d = P[w.d]
        }
        M.vertices = Q
    })();
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.CubeGeometry.prototype = new THREE.Geometry;
THREE.CubeGeometry.prototype.constructor = THREE.CubeGeometry;
THREE.CylinderGeometry = function (J, H, F, E, D, B) {
    function C(f, k, h) {
        A.vertices.push(new THREE.Vertex(new THREE.Vector3(f, k, h)))
    }
    THREE.Geometry.call(this);
    var A = this,
        N, o = Math.PI * 2,
        M = E / 2;
    for (N = 0; N < J; N++) {
        C(Math.sin(o * N / J) * H, Math.cos(o * N / J) * H, -M)
    }
    for (N = 0; N < J; N++) {
        C(Math.sin(o * N / J) * F, Math.cos(o * N / J) * F, M)
    }
    var O, K, L, G, I = H - F;
    for (N = 0; N < J; N++) {
        O = new THREE.Vector3, O.copy(A.vertices[N].position), O.z = I, O.normalize(), K = new THREE.Vector3, K.copy(A.vertices[N + J].position), K.z = I, K.normalize(), L = new THREE.Vector3, L.copy(A.vertices[J + (N + 1) % J].position), L.z = I, L.normalize(), G = new THREE.Vector3, G.copy(A.vertices[(N + 1) % J].position), G.z = I, G.normalize(), A.faces.push(new THREE.Face4(N, N + J, J + (N + 1) % J, (N + 1) % J, [O, K, L, G]))
    }
    if (F > 0) {
        F = new THREE.Vector3(0, 0, -1);
        C(0, 0, -M - (B || 0));
        for (N = J; N < J + J / 2; N++) {
            A.faces.push(new THREE.Face4(2 * J, (2 * N - 2 * J) % J, (2 * N - 2 * J + 1) % J, (2 * N - 2 * J + 2) % J, [F, F, F, F]))
        }
    }
    if (H > 0) {
        H = new THREE.Vector3(0, 0, 1);
        C(0, 0, M + (D || 0));
        for (N = J + J / 2; N < 2 * J; N++) {
            A.faces.push(new THREE.Face4(2 * J + 1, (2 * N - 2 * J + 2) % J + J, (2 * N - 2 * J + 1) % J + J, (2 * N - 2 * J) % J + J, [H, H, H, H]))
        }
    }
    N = 0;
    for (J = this.faces.length; N < J; N++) {
        D = [], M = this.faces[N], H = this.vertices[M.a], B = this.vertices[M.b], F = this.vertices[M.c], O = this.vertices[M.d], D.push(new THREE.UV(0.5 + Math.atan2(H.position.x, H.position.y) / o, 0.5 + H.position.z / E)), D.push(new THREE.UV(0.5 + Math.atan2(B.position.x, B.position.y) / o, 0.5 + B.position.z / E)), D.push(new THREE.UV(0.5 + Math.atan2(F.position.x, F.position.y) / o, 0.5 + F.position.z / E)), M instanceof THREE.Face4 && D.push(new THREE.UV(0.5 + Math.atan2(O.position.x, O.position.y) / o, 0.5 + O.position.z / E)), this.faceVertexUvs[0].push(D)
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = new THREE.Geometry;
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;
THREE.ExtrudeGeometry = function (k, p) {
    if (typeof k != "undefined") {
        THREE.Geometry.call(this);
        var k = k instanceof Array ? k : [k],
            o, n = k.length,
            m;
        this.shapebb = k[n - 1].getBoundingBox();
        for (o = 0; o < n; o++) {
            m = k[o], this.addShape(m, p)
        }
        this.computeCentroids();
        this.computeFaceNormals()
    }
};
THREE.ExtrudeGeometry.prototype = new THREE.Geometry;
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShape = function (aI, aH) {
    function aG(f, k, h) {
        k || console.log("die");
        return k.clone().multiplyScalar(h).addSelf(f)
    }
    function aF(B, z, y) {
        var x = THREE.ExtrudeGeometry.__v1,
            v = THREE.ExtrudeGeometry.__v2,
            w = THREE.ExtrudeGeometry.__v3,
            u = THREE.ExtrudeGeometry.__v4,
            t = THREE.ExtrudeGeometry.__v5,
            p = THREE.ExtrudeGeometry.__v6;
        x.set(B.x - z.x, B.y - z.y);
        v.set(B.x - y.x, B.y - y.y);
        x = x.normalize();
        v = v.normalize();
        w.set(-x.y, x.x);
        u.set(v.y, -v.x);
        t.copy(B).addSelf(w);
        p.copy(B).addSelf(u);
        if (t.equals(p)) {
            return u.clone()
        }
        t.copy(z).addSelf(w);
        p.copy(y).addSelf(u);
        w = x.dot(u);
        u = p.subSelf(t).dot(u);
        w == 0 && (console.log("Either infinite or no solutions!"), u == 0 ? console.log("Its finite solutions.") : console.log("Too bad, no solutions."));
        u /= w;
        if (u < 0) {
            return z = Math.atan2(z.y - B.y, z.x - B.x), B = Math.atan2(y.y - B.y, y.x - B.x), z > B && (B += Math.PI * 2), anglec = (z + B) / 2, new THREE.Vector2(-Math.cos(anglec), -Math.sin(anglec))
        }
        return x.multiplyScalar(u).addSelf(t).subSelf(B).clone()
    }
    function aE(B) {
        for (Z = B.length; --Z >= 0;) {
            am = Z;
            al = Z - 1;
            al < 0 && (al = B.length - 1);
            for (var z = 0, y = av + aw * 2, z = 0; z < y; z++) {
                var x = A * z,
                    v = A * (z + 1),
                    w = ao + am + x,
                    u = ao + am + v,
                    t = w,
                    x = ao + al + x,
                    v = ao + al + v,
                    n = u;
                t += M;
                x += M;
                v += M;
                n += M;
                ab.faces.push(new THREE.Face4(t, x, v, n, null, null, ag));
                ag && (t = z / y, x = (z + 1) / y, v = aB + ax * 2, w = (ab.vertices[w].position.z + ax) / v, u = (ab.vertices[u].position.z + ax) / v, ab.faceVertexUvs[0].push([new THREE.UV(w, t), new THREE.UV(u, t), new THREE.UV(u, x), new THREE.UV(w, x)]))
            }
        }
    }
    function aC(f, k, h) {
        ab.vertices.push(new THREE.Vertex(new THREE.Vector3(f, k, h)))
    }
    function aD(o, w, v) {
        o += M;
        w += M;
        v += M;
        ab.faces.push(new THREE.Face3(o, w, v, null, null, ad));
        if (ad) {
            var u = Y.maxY,
                p = Y.maxX,
                t = ab.vertices[w].position.x,
                w = ab.vertices[w].position.y,
                n = ab.vertices[v].position.x,
                v = ab.vertices[v].position.y;
            ab.faceVertexUvs[0].push([new THREE.UV(ab.vertices[o].position.x / p, ab.vertices[o].position.y / u), new THREE.UV(t / p, w / u), new THREE.UV(n / p, v / u)])
        }
    }
    var aB = aH.amount !== void 0 ? aH.amount : 100,
        ax = aH.bevelThickness !== void 0 ? aH.bevelThickness : 6,
        az = aH.bevelSize !== void 0 ? aH.bevelSize : ax - 2,
        aw = aH.bevelSegments !== void 0 ? aH.bevelSegments : 3,
        ay = aH.bevelEnabled !== void 0 ? aH.bevelEnabled : !0,
        au = aH.curveSegments !== void 0 ? aH.curveSegments : 12,
        av = aH.steps !== void 0 ? aH.steps : 1,
        ar = aH.bendPath,
        at = aH.extrudePath,
        aj, ah = !1,
        ae = aH.useSpacedPoints !== void 0 ? aH.useSpacedPoints : !1,
        ad = aH.material,
        ag = aH.extrudeMaterial,
        Y = this.shapebb;
    if (at) {
        aj = at.getPoints(au), av = aj.length, ah = !0, ay = !1
    }
    ay || (az = ax = aw = 0);
    var af, ac, ai, ab = this,
        M = this.vertices.length;
    ar && aI.addWrapPath(ar);
    au = ae ? aI.extractAllSpacedPoints(au) : aI.extractAllPoints(au);
    ar = au.shape;
    au = au.holes;
    if (at = !THREE.Shape.Utils.isClockWise(ar)) {
        ar = ar.reverse();
        ac = 0;
        for (ai = au.length; ac < ai; ac++) {
            af = au[ac], THREE.Shape.Utils.isClockWise(af) && (au[ac] = af.reverse())
        }
        at = !1
    }
    at = THREE.Shape.Utils.triangulateShape(ar, au);
    ae = ar;
    ac = 0;
    for (ai = au.length; ac < ai; ac++) {
        af = au[ac], ar = ar.concat(af)
    }
    var Z, X, Q, V, aA, J, A = ar.length,
        T = at.length,
        aq = [];
    Z = 0;
    X = ae.length;
    am = X - 1;
    for (al = Z + 1; Z < X; Z++, am++, al++) {
        am == X && (am = 0), al == X && (al = 0), aq[Z] = aF(ae[Z], ae[am], ae[al])
    }
    var ak = [],
        an, ap = aq.concat();
    ac = 0;
    for (ai = au.length; ac < ai; ac++) {
        af = au[ac];
        an = [];
        Z = 0;
        X = af.length;
        am = X - 1;
        for (al = Z + 1; Z < X; Z++, am++, al++) {
            am == X && (am = 0), al == X && (al = 0), an[Z] = aF(af[Z], af[am], af[al])
        }
        ak.push(an);
        ap = ap.concat(an)
    }
    for (Q = 0; Q < aw; Q++) {
        V = Q / aw;
        aA = ax * (1 - V);
        V = az * Math.sin(V * Math.PI / 2);
        Z = 0;
        for (X = ae.length; Z < X; Z++) {
            J = aG(ae[Z], aq[Z], V), aC(J.x, J.y, -aA)
        }
        ac = 0;
        for (ai = au.length; ac < ai; ac++) {
            af = au[ac];
            an = ak[ac];
            Z = 0;
            for (X = af.length; Z < X; Z++) {
                J = aG(af[Z], an[Z], V), aC(J.x, J.y, -aA)
            }
        }
    }
    V = az;
    for (Z = 0; Z < A; Z++) {
        J = ay ? aG(ar[Z], ap[Z], V) : ar[Z], ah ? aC(J.x, J.y + aj[0].y, aj[0].x) : aC(J.x, J.y, 0)
    }
    for (Q = 1; Q <= av; Q++) {
        for (Z = 0; Z < A; Z++) {
            J = ay ? aG(ar[Z], ap[Z], V) : ar[Z], ah ? aC(J.x, J.y + aj[Q - 1].y, aj[Q - 1].x) : aC(J.x, J.y, aB / av * Q)
        }
    }
    for (Q = aw - 1; Q >= 0; Q--) {
        V = Q / aw;
        aA = ax * (1 - V);
        V = az * Math.sin(V * Math.PI / 2);
        Z = 0;
        for (X = ae.length; Z < X; Z++) {
            J = aG(ae[Z], aq[Z], V), aC(J.x, J.y, aB + aA)
        }
        ac = 0;
        for (ai = au.length; ac < ai; ac++) {
            af = au[ac];
            an = ak[ac];
            Z = 0;
            for (X = af.length; Z < X; Z++) {
                J = aG(af[Z], an[Z], V), ah ? aC(J.x, J.y + aj[av - 1].y, aj[av - 1].x + aA) : aC(J.x, J.y, aB + aA)
            }
        }
    }
    if (ay) {
        ay = A * 0;
        for (Z = 0; Z < T; Z++) {
            az = at[Z], aD(az[2] + ay, az[1] + ay, az[0] + ay)
        }
        ay = A * (av + aw * 2);
        for (Z = 0; Z < T; Z++) {
            az = at[Z], aD(az[0] + ay, az[1] + ay, az[2] + ay)
        }
    } else {
        for (Z = 0; Z < T; Z++) {
            az = at[Z], aD(az[2], az[1], az[0])
        }
        for (Z = 0; Z < T; Z++) {
            az = at[Z], aD(az[0] + A * av, az[1] + A * av, az[2] + A * av)
        }
    }
    var am, al, ao = 0;
    aE(ae);
    ao += ae.length;
    ac = 0;
    for (ai = au.length; ac < ai; ac++) {
        af = au[ac], aE(af), ao += af.length
    }
};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.IcosahedronGeometry = function (C) {
    function B(h, n, m) {
        var k = Math.sqrt(h * h + n * n + m * m);
        return y.vertices.push(new THREE.Vertex(new THREE.Vector3(h / k, n / k, m / k))) - 1
    }
    function A(h, n, m, k) {
        k.faces.push(new THREE.Face3(h, n, m))
    }
    function z(c, n) {
        var m = y.vertices[c].position,
            h = y.vertices[n].position;
        return B((m.x + h.x) / 2, (m.y + h.y) / 2, (m.z + h.z) / 2)
    }
    var y = this,
        w = new THREE.Geometry;
    this.subdivisions = C || 0;
    THREE.Geometry.call(this);
    C = (1 + Math.sqrt(5)) / 2;
    B(-1, C, 0);
    B(1, C, 0);
    B(-1, -C, 0);
    B(1, -C, 0);
    B(0, -1, C);
    B(0, 1, C);
    B(0, -1, -C);
    B(0, 1, -C);
    B(C, 0, -1);
    B(C, 0, 1);
    B(-C, 0, -1);
    B(-C, 0, 1);
    A(0, 11, 5, w);
    A(0, 5, 1, w);
    A(0, 1, 7, w);
    A(0, 7, 10, w);
    A(0, 10, 11, w);
    A(1, 5, 9, w);
    A(5, 11, 4, w);
    A(11, 10, 2, w);
    A(10, 7, 6, w);
    A(7, 1, 8, w);
    A(3, 9, 4, w);
    A(3, 4, 2, w);
    A(3, 2, 6, w);
    A(3, 6, 8, w);
    A(3, 8, 9, w);
    A(4, 9, 5, w);
    A(2, 4, 11, w);
    A(6, 2, 10, w);
    A(8, 6, 7, w);
    A(9, 8, 1, w);
    for (var x = 0; x < this.subdivisions; x++) {
        var C = new THREE.Geometry,
            t;
        for (t in w.faces) {
            var E = z(w.faces[t].a, w.faces[t].b),
                o = z(w.faces[t].b, w.faces[t].c),
                D = z(w.faces[t].c, w.faces[t].a);
            A(w.faces[t].a, E, D, C);
            A(w.faces[t].b, o, E, C);
            A(w.faces[t].c, D, o, C);
            A(E, o, D, C)
        }
        w.faces = C.faces
    }
    y.faces = w.faces;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.IcosahedronGeometry.prototype = new THREE.Geometry;
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;
THREE.LatheGeometry = function (z, y, x) {
    THREE.Geometry.call(this);
    this.steps = y || 12;
    this.angle = x || 2 * Math.PI;
    for (var y = this.angle / this.steps, x = [], w = [], v = [], p = [], t = (new THREE.Matrix4).setRotationZ(y), o = 0; o < z.length; o++) {
        this.vertices.push(new THREE.Vertex(z[o])), x[o] = z[o].clone(), w[o] = this.vertices.length - 1
    }
    for (var A = 0; A <= this.angle + 0.001; A += y) {
        for (o = 0; o < x.length; o++) {
            A < this.angle ? (x[o] = t.multiplyVector3(x[o].clone()), this.vertices.push(new THREE.Vertex(x[o])), v[o] = this.vertices.length - 1) : v = p
        }
        A == 0 && (p = w);
        for (o = 0; o < w.length - 1; o++) {
            this.faces.push(new THREE.Face4(v[o], v[o + 1], w[o + 1], w[o])), this.faceVertexUvs[0].push([new THREE.UV(1 - A / this.angle, o / z.length), new THREE.UV(1 - A / this.angle, (o + 1) / z.length), new THREE.UV(1 - (A - y) / this.angle, (o + 1) / z.length), new THREE.UV(1 - (A - y) / this.angle, o / z.length)])
        }
        w = v;
        v = []
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = new THREE.Geometry;
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;
THREE.PlaneGeometry = function (B, A, z, y) {
    THREE.Geometry.call(this);
    var x, v = B / 2,
        w = A / 2,
        z = z || 1,
        y = y || 1,
        t = z + 1,
        C = y + 1;
    B /= z;
    var o = A / y;
    for (x = 0; x < C; x++) {
        for (A = 0; A < t; A++) {
            this.vertices.push(new THREE.Vertex(new THREE.Vector3(A * B - v, -(x * o - w), 0)))
        }
    }
    for (x = 0; x < y; x++) {
        for (A = 0; A < z; A++) {
            this.faces.push(new THREE.Face4(A + t * x, A + t * (x + 1), A + 1 + t * (x + 1), A + 1 + t * x)), this.faceVertexUvs[0].push([new THREE.UV(A / z, x / y), new THREE.UV(A / z, (x + 1) / y), new THREE.UV((A + 1) / z, (x + 1) / y), new THREE.UV((A + 1) / z, x / y)])
        }
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.PlaneGeometry.prototype = new THREE.Geometry;
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
THREE.SphereGeometry = function (L, J, H) {
    THREE.Geometry.call(this);
    for (var L = L || 50, G, F = Math.PI, D = Math.max(3, J || 8), E = Math.max(2, H || 6), J = [], H = 0; H < E + 1; H++) {
        G = H / E;
        var C = L * Math.cos(G * F),
            P = L * Math.sin(G * F),
            A = [],
            O = 0;
        for (G = 0; G < D; G++) {
            var Q = 2 * G / D,
                M = P * Math.sin(Q * F),
                Q = P * Math.cos(Q * F);
            (H == 0 || H == E) && G > 0 || (O = this.vertices.push(new THREE.Vertex(new THREE.Vector3(Q, C, M))) - 1);
            A.push(O)
        }
        J.push(A)
    }
    for (var N, I, K, F = J.length, H = 0; H < F; H++) {
        if (D = J[H].length, H > 0) {
            for (G = 0; G < D; G++) {
                A = G == D - 1;
                E = J[H][A ? 0 : G + 1];
                C = J[H][A ? D - 1 : G];
                P = J[H - 1][A ? D - 1 : G];
                A = J[H - 1][A ? 0 : G + 1];
                M = H / (F - 1);
                N = (H - 1) / (F - 1);
                I = (G + 1) / D;
                var Q = G / D,
                    O = new THREE.UV(1 - I, M),
                    M = new THREE.UV(1 - Q, M),
                    Q = new THREE.UV(1 - Q, N),
                    o = new THREE.UV(1 - I, N);
                H < J.length - 1 && (N = this.vertices[E].position.clone(), I = this.vertices[C].position.clone(), K = this.vertices[P].position.clone(), N.normalize(), I.normalize(), K.normalize(), this.faces.push(new THREE.Face3(E, C, P, [new THREE.Vector3(N.x, N.y, N.z), new THREE.Vector3(I.x, I.y, I.z), new THREE.Vector3(K.x, K.y, K.z)])), this.faceVertexUvs[0].push([O, M, Q]));
                H > 1 && (N = this.vertices[E].position.clone(), I = this.vertices[P].position.clone(), K = this.vertices[A].position.clone(), N.normalize(), I.normalize(), K.normalize(), this.faces.push(new THREE.Face3(E, P, A, [new THREE.Vector3(N.x, N.y, N.z), new THREE.Vector3(I.x, I.y, I.z), new THREE.Vector3(K.x, K.y, K.z)])), this.faceVertexUvs[0].push([O, Q, o]))
            }
        }
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.boundingSphere = {
        radius: L
    }
};
THREE.SphereGeometry.prototype = new THREE.Geometry;
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
THREE.TextGeometry = function (h, n) {
    var m = (new THREE.TextPath(h, n)).toShapes();
    n.amount = n.height !== void 0 ? n.height : 50;
    if (n.bevelThickness === void 0) {
        n.bevelThickness = 10
    }
    if (n.bevelSize === void 0) {
        n.bevelSize = 8
    }
    if (n.bevelEnabled === void 0) {
        n.bevelEnabled = !1
    }
    if (n.bend) {
        var k = m[m.length - 1].getBoundingBox().maxX;
        n.bendPath = new THREE.QuadraticBezierCurve(new THREE.Vector2(0, 0), new THREE.Vector2(k / 2, 120), new THREE.Vector2(k, 0))
    }
    THREE.ExtrudeGeometry.call(this, m, n)
};
THREE.TextGeometry.prototype = new THREE.ExtrudeGeometry;
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;
THREE.FontUtils = {
    faces: {},
    face: "helvetiker",
    weight: "normal",
    style: "normal",
    size: 150,
    divisions: 10,
    getFace: function () {
        return this.faces[this.face][this.weight][this.style]
    },
    getTextShapes: function (e, f) {
        return (new TextPath(e, f)).toShapes()
    },
    loadFace: function (e) {
        var f = e.familyName.toLowerCase();
        this.faces[f] = this.faces[f] || {};
        this.faces[f][e.cssFontWeight] = this.faces[f][e.cssFontWeight] || {};
        this.faces[f][e.cssFontWeight][e.cssFontStyle] = e;
        return this.faces[f][e.cssFontWeight][e.cssFontStyle] = e
    },
    drawText: function (p) {
        for (var y = this.getFace(), w = this.size / y.resolution, v = 0, u = String(p).split(""), o = u.length, t = [], p = 0; p < o; p++) {
            var x = new THREE.Path,
                x = this.extractGlyphPoints(u[p], y, w, v, x);
            v += x.offset;
            t.push(x.path)
        }
        return {
            paths: t,
            offset: v / 2
        }
    },
    extractGlyphPoints: function (U, T, S, R, Q) {
        var O = [],
            P, N, I, M, H, J, C, E, o, A, L = T.glyphs[U] || T.glyphs[ctxt.options.fallbackCharacter];
        if (L) {
            if (L.o) {
                T = L._cachedOutline || (L._cachedOutline = L.o.split(" "));
                I = T.length;
                for (U = 0; U < I;) {
                    switch (N = T[U++], N) {
                        case "m":
                            N = T[U++] * S + R;
                            M = T[U++] * S;
                            O.push(new THREE.Vector2(N, M));
                            Q.moveTo(N, M);
                            break;
                        case "l":
                            N = T[U++] * S + R;
                            M = T[U++] * S;
                            O.push(new THREE.Vector2(N, M));
                            Q.lineTo(N, M);
                            break;
                        case "q":
                            N = T[U++] * S + R;
                            M = T[U++] * S;
                            C = T[U++] * S + R;
                            E = T[U++] * S;
                            Q.quadraticCurveTo(C, E, N, M);
                            if (P = O[O.length - 1]) {
                                H = P.x;
                                J = P.y;
                                P = 1;
                                for (divisions = this.divisions; P <= divisions; P++) {
                                    var K = P / divisions,
                                        F = THREE.Shape.Utils.b2(K, H, C, N),
                                        K = THREE.Shape.Utils.b2(K, J, E, M);
                                    O.push(new THREE.Vector2(F, K))
                                }
                            }
                            break;
                        case "b":
                            if (N = T[U++] * S + R, M = T[U++] * S, C = T[U++] * S + R, E = T[U++] * -S, o = T[U++] * S + R, A = T[U++] * -S, Q.bezierCurveTo(N, M, C, E, o, A), P = O[O.length - 1]) {
                                H = P.x;
                                J = P.y;
                                P = 1;
                                for (divisions = this.divisions; P <= divisions; P++) {
                                    K = P / divisions, F = THREE.Shape.Utils.b3(K, H, C, o, N), K = THREE.Shape.Utils.b3(K, J, E, A, M), O.push(new THREE.Vector2(F, K))
                                }
                            }
                    }
                }
            }
            return {
                offset: L.ha * S,
                points: O,
                path: Q
            }
        }
    }
};
(function (e) {
    var f = function (o) {
        for (var u = o.length, t = 0, n = u - 1, p = 0; p < u; n = p++) {
            t += o[n].x * o[p].y - o[p].x * o[n].y
        }
        return t * 0.5
    };
    e.Triangulate = function (aC, aB) {
        var aA = aC.length;
        if (aA < 3) {
            return null
        }
        var ay = [],
            az = [],
            ax = [],
            at, av, ar;
        if (f(aC) > 0) {
            for (av = 0; av < aA; av++) {
                az[av] = av
            }
        } else {
            for (av = 0; av < aA; av++) {
                az[av] = aA - 1 - av
            }
        }
        var au = 2 * aA;
        for (av = aA - 1; aA > 2;) {
            if (au-- <= 0) {
                console.log("Warning, unable to triangulate polygon!");
                if (aB) {
                    return ax
                }
                return ay
            }
            at = av;
            aA <= at && (at = 0);
            av = at + 1;
            aA <= av && (av = 0);
            ar = av + 1;
            aA <= ar && (ar = 0);
            var ap;
            a: {
                ap = aC;
                var aq = at,
                    an = av,
                    ao = ar,
                    ai = aA,
                    ag = az,
                    ad = void 0,
                    ac = void 0,
                    af = void 0,
                    X = void 0,
                    ae = void 0,
                    ab = void 0,
                    ah = void 0,
                    Z = void 0,
                    J = void 0,
                    ac = ap[ag[aq]].x,
                    af = ap[ag[aq]].y,
                    X = ap[ag[an]].x,
                    ae = ap[ag[an]].y,
                    ab = ap[ag[ao]].x,
                    ah = ap[ag[ao]].y;
                if (1e-10 > (X - ac) * (ah - af) - (ae - af) * (ab - ac)) {
                    ap = !1
                } else {
                    for (ad = 0; ad < ai; ad++) {
                        if (!(ad == aq || ad == an || ad == ao)) {
                            var Z = ap[ag[ad]].x,
                                J = ap[ag[ad]].y,
                                Y = void 0,
                                V = void 0,
                                M = void 0,
                                T = void 0,
                                aw = void 0,
                                A = void 0,
                                c = void 0,
                                Q = void 0,
                                am = void 0,
                                aj = void 0,
                                ak = void 0,
                                al = void 0,
                                Y = M = aw = void 0,
                                Y = ab - X,
                                V = ah - ae,
                                M = ac - ab,
                                T = af - ah,
                                aw = X - ac,
                                A = ae - af,
                                c = Z - ac,
                                Q = J - af,
                                am = Z - X,
                                aj = J - ae,
                                ak = Z - ab,
                                al = J - ah,
                                Y = Y * aj - V * am,
                                aw = aw * Q - A * c,
                                M = M * al - T * ak;
                            if (Y >= 0 && M >= 0 && aw >= 0) {
                                ap = !1;
                                break a
                            }
                        }
                    }
                    ap = !0
                }
            }
            if (ap) {
                ay.push([aC[az[at]], aC[az[av]], aC[az[ar]]]);
                ax.push([az[at], az[av], az[ar]]);
                at = av;
                for (ar = av + 1; ar < aA; at++, ar++) {
                    az[at] = az[ar]
                }
                aA--;
                au = 2 * aA
            }
        }
        if (aB) {
            return ax
        }
        return ay
    };
    e.Triangulate.area = f;
    return e
})(THREE.FontUtils);
window._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace
};
THREE.TorusGeometry = function (z, y, x, w, v) {
    THREE.Geometry.call(this);
    this.radius = z || 100;
    this.tube = y || 40;
    this.segmentsR = x || 8;
    this.segmentsT = w || 6;
    this.arc = v || Math.PI * 2;
    v = new THREE.Vector3;
    z = [];
    y = [];
    for (x = 0; x <= this.segmentsR; x++) {
        for (w = 0; w <= this.segmentsT; w++) {
            var p = w / this.segmentsT * this.arc,
                t = x / this.segmentsR * Math.PI * 2;
            v.x = this.radius * Math.cos(p);
            v.y = this.radius * Math.sin(p);
            var o = new THREE.Vector3;
            o.x = (this.radius + this.tube * Math.cos(t)) * Math.cos(p);
            o.y = (this.radius + this.tube * Math.cos(t)) * Math.sin(p);
            o.z = this.tube * Math.sin(t);
            this.vertices.push(new THREE.Vertex(o));
            z.push(new THREE.UV(w / this.segmentsT, 1 - x / this.segmentsR));
            y.push(o.clone().subSelf(v).normalize())
        }
    }
    for (x = 1; x <= this.segmentsR; x++) {
        for (w = 1; w <= this.segmentsT; w++) {
            var v = (this.segmentsT + 1) * x + w - 1,
                p = (this.segmentsT + 1) * (x - 1) + w - 1,
                t = (this.segmentsT + 1) * (x - 1) + w,
                o = (this.segmentsT + 1) * x + w,
                A = new THREE.Face4(v, p, t, o, [y[v], y[p], y[t], y[o]]);
            A.normal.addSelf(y[v]);
            A.normal.addSelf(y[p]);
            A.normal.addSelf(y[t]);
            A.normal.addSelf(y[o]);
            A.normal.normalize();
            this.faces.push(A);
            this.faceVertexUvs[0].push([z[v].clone(), z[p].clone(), z[t].clone(), z[o].clone()])
        }
    }
    this.computeCentroids()
};
THREE.TorusGeometry.prototype = new THREE.Geometry;
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;
THREE.TorusKnotGeometry = function (C, B, A, z, y, w, x) {
    function t(m, F, v, u, n, p) {
        F = v / u * m;
        v = Math.cos(F);
        return new THREE.Vector3(n * (2 + v) * 0.5 * Math.cos(m), n * (2 + v) * Math.sin(m) * 0.5, p * n * Math.sin(F) * 0.5)
    }
    THREE.Geometry.call(this);
    this.radius = C || 200;
    this.tube = B || 40;
    this.segmentsR = A || 64;
    this.segmentsT = z || 8;
    this.p = y || 2;
    this.q = w || 3;
    this.heightScale = x || 1;
    this.grid = Array(this.segmentsR);
    A = new THREE.Vector3;
    z = new THREE.Vector3;
    w = new THREE.Vector3;
    for (C = 0; C < this.segmentsR; ++C) {
        this.grid[C] = Array(this.segmentsT);
        for (B = 0; B < this.segmentsT; ++B) {
            var E = C / this.segmentsR * 2 * this.p * Math.PI,
                x = B / this.segmentsT * 2 * Math.PI,
                y = t(E, x, this.q, this.p, this.radius, this.heightScale),
                E = t(E + 0.01, x, this.q, this.p, this.radius, this.heightScale);
            A.x = E.x - y.x;
            A.y = E.y - y.y;
            A.z = E.z - y.z;
            z.x = E.x + y.x;
            z.y = E.y + y.y;
            z.z = E.z + y.z;
            w.cross(A, z);
            z.cross(w, A);
            w.normalize();
            z.normalize();
            E = -this.tube * Math.cos(x);
            x = this.tube * Math.sin(x);
            y.x += E * z.x + x * w.x;
            y.y += E * z.y + x * w.y;
            y.z += E * z.z + x * w.z;
            this.grid[C][B] = this.vertices.push(new THREE.Vertex(new THREE.Vector3(y.x, y.y, y.z))) - 1
        }
    }
    for (C = 0; C < this.segmentsR; ++C) {
        for (B = 0; B < this.segmentsT; ++B) {
            var z = (C + 1) % this.segmentsR,
                w = (B + 1) % this.segmentsT,
                y = this.grid[C][B],
                A = this.grid[z][B],
                z = this.grid[z][w],
                w = this.grid[C][w],
                x = new THREE.UV(C / this.segmentsR, B / this.segmentsT),
                E = new THREE.UV((C + 1) / this.segmentsR, B / this.segmentsT),
                o = new THREE.UV((C + 1) / this.segmentsR, (B + 1) / this.segmentsT),
                D = new THREE.UV(C / this.segmentsR, (B + 1) / this.segmentsT);
            this.faces.push(new THREE.Face4(y, A, z, w));
            this.faceVertexUvs[0].push([x, E, o, D])
        }
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = new THREE.Geometry;
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;
THREE.Loader = function (c) {
    this.statusDomElement = (this.showStatus = c) ? THREE.Loader.prototype.addStatusElement() : null;
    this.onLoadStart = function () {};
    this.onLoadProgress = function () {};
    this.onLoadComplete = function () {}
};
THREE.Loader.prototype = {
    addStatusElement: function () {
        var c = document.createElement("div");
        c.style.position = "absolute";
        c.style.right = "0px";
        c.style.top = "0px";
        c.style.fontSize = "0.8em";
        c.style.textAlign = "left";
        c.style.background = "rgba(0,0,0,0.25)";
        c.style.color = "#fff";
        c.style.width = "120px";
        c.style.padding = "0.5em 0.5em 0.5em 0.5em";
        c.style.zIndex = 1000;
        c.innerHTML = "Loading ...";
        return c
    },
    updateProgress: function (e) {
        var f = "Loaded ";
        f += e.total ? (100 * e.loaded / e.total).toFixed(0) + "%" : (e.loaded / 1000).toFixed(2) + " KB";
        this.statusDomElement.innerHTML = f
    },
    extractUrlbase: function (c) {
        c = c.split("/");
        c.pop();
        return c.join("/")
    },
    init_materials: function (h, n, m) {
        h.materials = [];
        for (var k = 0; k < n.length; ++k) {
            h.materials[k] = [THREE.Loader.prototype.createMaterial(n[k], m)]
        }
    },
    hasNormals: function (h) {
        var n, m, k = h.materials.length;
        for (m = 0; m < k; m++) {
            if (n = h.materials[m][0], n instanceof THREE.MeshShaderMaterial) {
                return !0
            }
        }
        return !1
    },
    createMaterial: function (E, D) {
        function C(c) {
            c = Math.log(c) / Math.LN2;
            return Math.floor(c) == c
        }
        function B(e, k) {
            var h = new Image;
            h.onload = function () {
                if (!C(this.width) || !C(this.height)) {
                    var m = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)),
                        b = Math.pow(2, Math.round(Math.log(this.height) / Math.LN2));
                    e.image.width = m;
                    e.image.height = b;
                    e.image.getContext("2d").drawImage(this, 0, 0, m, b)
                } else {
                    e.image = this
                }
                e.needsUpdate = !0
            };
            h.src = k
        }
        function A(f, x, t, u, c, J) {
            var v = document.createElement("canvas");
            f[x] = new THREE.Texture(v);
            f[x].sourceFile = t;
            if (u) {
                f[x].repeat.set(u[0], u[1]);
                if (u[0] != 1) {
                    f[x].wrapS = THREE.RepeatWrapping
                }
                if (u[1] != 1) {
                    f[x].wrapT = THREE.RepeatWrapping
                }
            }
            c && f[x].offset.set(c[0], c[1]);
            if (J) {
                u = {
                    repeat: THREE.RepeatWrapping,
                    mirror: THREE.MirroredRepeatWrapping
                };
                if (u[J[0]] !== void 0) {
                    f[x].wrapS = u[J[0]]
                }
                if (u[J[1]] !== void 0) {
                    f[x].wrapT = u[J[1]]
                }
            }
            B(f[x], D + "/" + t)
        }
        function y(c) {
            return (c[0] * 255 << 16) + (c[1] * 255 << 8) + c[2] * 255
        }
        var z, w, H;
        w = "MeshLambertMaterial";
        z = {
            color: 15658734,
            opacity: 1,
            map: null,
            lightMap: null,
            normalMap: null,
            wireframe: E.wireframe
        };
        E.shading && (E.shading == "Phong" ? w = "MeshPhongMaterial" : E.shading == "Basic" && (w = "MeshBasicMaterial"));
        if (E.blending) {
            if (E.blending == "Additive") {
                z.blending = THREE.AdditiveBlending
            } else {
                if (E.blending == "Subtractive") {
                    z.blending = THREE.SubtractiveBlending
                } else {
                    if (E.blending == "Multiply") {
                        z.blending = THREE.MultiplyBlending
                    }
                }
            }
        }
        if (E.transparent !== void 0 || E.opacity < 1) {
            z.transparent = E.transparent
        }
        if (E.depthTest !== void 0) {
            z.depthTest = E.depthTest
        }
        if (E.vertexColors !== void 0) {
            if (E.vertexColors == "face") {
                z.vertexColors = THREE.FaceColors
            } else {
                if (E.vertexColors) {
                    z.vertexColors = THREE.VertexColors
                }
            }
        }
        if (E.colorDiffuse) {
            z.color = y(E.colorDiffuse)
        } else {
            if (E.DbgColor) {
                z.color = E.DbgColor
            }
        }
        if (E.colorSpecular) {
            z.specular = y(E.colorSpecular)
        }
        if (E.colorAmbient) {
            z.ambient = y(E.colorAmbient)
        }
        if (E.transparency) {
            z.opacity = E.transparency
        }
        if (E.specularCoef) {
            z.shininess = E.specularCoef
        }
        E.mapDiffuse && D && A(z, "map", E.mapDiffuse, E.mapDiffuseRepeat, E.mapDiffuseOffset, E.mapDiffuseWrap);
        E.mapLight && D && A(z, "lightMap", E.mapLight, E.mapLightRepeat, E.mapLightOffset, E.mapLightWrap);
        E.mapNormal && D && A(z, "normalMap", E.mapNormal, E.mapNormalRepeat, E.mapNormalOffset, E.mapNormalWrap);
        E.mapSpecular && D && A(z, "specularMap", E.mapSpecular, E.mapSpecularRepeat, E.mapSpecularOffset, E.mapSpecularWrap);
        if (E.mapNormal) {
            var o = THREE.ShaderUtils.lib.normal,
                G = THREE.UniformsUtils.clone(o.uniforms),
                I = z.color;
            w = z.specular;
            H = z.ambient;
            var F = z.shininess;
            G.tNormal.texture = z.normalMap;
            if (E.mapNormalFactor) {
                G.uNormalScale.value = E.mapNormalFactor
            }
            if (z.map) {
                G.tDiffuse.texture = z.map, G.enableDiffuse.value = !0
            }
            if (z.specularMap) {
                G.tSpecular.texture = z.specularMap, G.enableSpecular.value = !0
            }
            if (z.lightMap) {
                G.tAO.texture = z.lightMap, G.enableAO.value = !0
            }
            G.uDiffuseColor.value.setHex(I);
            G.uSpecularColor.value.setHex(w);
            G.uAmbientColor.value.setHex(H);
            G.uShininess.value = F;
            if (z.opacity) {
                G.uOpacity.value = z.opacity
            }
            z = new THREE.MeshShaderMaterial({
                fragmentShader: o.fragmentShader,
                vertexShader: o.vertexShader,
                uniforms: G,
                lights: !0,
                fog: !0
            })
        } else {
            z = new THREE[w](z)
        }
        return z
    },
    constructor: THREE.Loader
};
THREE.BinaryLoader = function (c) {
    THREE.Loader.call(this, c)
};
THREE.BinaryLoader.prototype = new THREE.Loader;
THREE.BinaryLoader.prototype.constructor = THREE.BinaryLoader;
THREE.BinaryLoader.prototype.supr = THREE.Loader.prototype;
THREE.BinaryLoader.prototype.load = function (n) {
    var u = n.model,
        t = n.callback,
        p = n.texture_path ? n.texture_path : THREE.Loader.prototype.extractUrlbase(u),
        o = n.bin_path ? n.bin_path : THREE.Loader.prototype.extractUrlbase(u),
        n = (new Date).getTime(),
        u = new Worker(u),
        k = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
    u.onmessage = function (c) {
        THREE.BinaryLoader.prototype.loadAjaxBuffers(c.data.buffers, c.data.materials, t, o, p, k)
    };
    u.onerror = function (c) {
        alert("worker.onerror: " + c.message + "\n" + c.data);
        c.preventDefault()
    };
    u.postMessage(n)
};
THREE.BinaryLoader.prototype.loadAjaxBuffers = function (z, y, x, w, v, p) {
    var t = new XMLHttpRequest,
        o = w + "/" + z,
        A = 0;
    t.onreadystatechange = function () {
        t.readyState == 4 ? t.status == 200 || t.status == 0 ? THREE.BinaryLoader.prototype.createBinModel(t.responseText, x, v, y) : alert("Couldn't load [" + o + "] [" + t.status + "]") : t.readyState == 3 ? p && (A == 0 && (A = t.getResponseHeader("Content-Length")), p({
            total: A,
            loaded: t.responseText.length
        })) : t.readyState == 2 && (A = t.getResponseHeader("Content-Length"))
    };
    t.open("GET", o, !0);
    t.overrideMimeType("text/plain; charset=x-user-defined");
    t.setRequestHeader("Content-Type", "text/plain");
    t.send(null)
};
THREE.BinaryLoader.prototype.createBinModel = function (k, p, o, n) {
    var m = function (aH) {
        function aG(t, y) {
            var w = aA(t, y),
                u = aA(t, y + 1),
                v = aA(t, y + 2),
                e = aA(t, y + 3),
                x = (e << 1 & 255 | v >> 7) - 127;
            w |= (v & 127) << 16 | u << 8;
            if (w == 0 && x == -127) {
                return 0
            }
            return (1 - 2 * (e >> 7)) * (1 + w * Math.pow(2, -23)) * Math.pow(2, x)
        }
        function aF(h, w) {
            var v = aA(h, w),
                u = aA(h, w + 1),
                t = aA(h, w + 2);
            return (aA(h, w + 3) << 24) + (t << 16) + (u << 8) + v
        }
        function aB(h, u) {
            var t = aA(h, u);
            return (aA(h, u + 1) << 8) + t
        }
        function aD(h, u) {
            var t = aA(h, u);
            return t > 127 ? t - 256 : t
        }
        function aA(e, h) {
            return e.charCodeAt(h) & 255
        }
        function aC(v) {
            var u, t, h;
            u = aF(k, v);
            t = aF(k, v + ah);
            h = aF(k, v + ae);
            v = aB(k, v + ak);
            aj.faces.push(new THREE.Face3(u, t, h, null, null, aj.materials[v]))
        }
        function ay(D) {
            var B, z, y, x, u, h;
            B = aF(k, D);
            z = aF(k, D + ah);
            y = aF(k, D + ae);
            x = aB(k, D + ak);
            u = aF(k, D + ad);
            h = aF(k, D + Q);
            D = aF(k, D + ac);
            x = aj.materials[x];
            var G = ai[h * 3],
                F = ai[h * 3 + 1];
            h = ai[h * 3 + 2];
            var E = ai[D * 3],
                C = ai[D * 3 + 1],
                D = ai[D * 3 + 2];
            aj.faces.push(new THREE.Face3(B, z, y, [new THREE.Vector3(ai[u * 3], ai[u * 3 + 1], ai[u * 3 + 2]), new THREE.Vector3(G, F, h), new THREE.Vector3(E, C, D)], null, x))
        }
        function az(w) {
            var v, u, t, h;
            v = aF(k, w);
            u = aF(k, w + Z);
            t = aF(k, w + T);
            h = aF(k, w + Y);
            w = aB(k, w + aE);
            aj.faces.push(new THREE.Face4(v, u, t, h, null, null, aj.materials[w]))
        }
        function aw(K) {
            var G, F, E, C, u, R, P, O;
            G = aF(k, K);
            F = aF(k, K + Z);
            E = aF(k, K + T);
            C = aF(k, K + Y);
            u = aB(k, K + aE);
            R = aF(k, K + J);
            P = aF(k, K + A);
            O = aF(k, K + V);
            K = aF(k, K + av);
            u = aj.materials[u];
            var N = ai[P * 3],
                H = ai[P * 3 + 1];
            P = ai[P * 3 + 2];
            var L = ai[O * 3],
                D = ai[O * 3 + 1];
            O = ai[O * 3 + 2];
            var I = ai[K * 3],
                h = ai[K * 3 + 1],
                K = ai[K * 3 + 2];
            aj.faces.push(new THREE.Face4(G, F, E, C, [new THREE.Vector3(ai[R * 3], ai[R * 3 + 1], ai[R * 3 + 2]), new THREE.Vector3(N, H, P), new THREE.Vector3(L, D, O), new THREE.Vector3(I, h, K)], null, u))
        }
        function ax(B) {
            var y, w, u, h;
            y = aF(k, B);
            w = aF(k, B + am);
            u = aF(k, B + aq);
            B = ab[y * 2];
            h = ab[y * 2 + 1];
            y = ab[w * 2];
            var z = aj.faceVertexUvs[0];
            w = ab[w * 2 + 1];
            var x = ab[u * 2];
            u = ab[u * 2 + 1];
            var v = [];
            v.push(new THREE.UV(B, h));
            v.push(new THREE.UV(y, w));
            v.push(new THREE.UV(x, u));
            z.push(v)
        }
        function al(C) {
            var B, z, y, x, w, h;
            B = aF(k, C);
            z = aF(k, C + au);
            y = aF(k, C + ao);
            x = aF(k, C + an);
            C = ab[B * 2];
            w = ab[B * 2 + 1];
            B = ab[z * 2];
            h = ab[z * 2 + 1];
            z = ab[y * 2];
            var F = aj.faceVertexUvs[0];
            y = ab[y * 2 + 1];
            var E = ab[x * 2];
            x = ab[x * 2 + 1];
            var D = [];
            D.push(new THREE.UV(C, w));
            D.push(new THREE.UV(B, h));
            D.push(new THREE.UV(z, y));
            D.push(new THREE.UV(E, x));
            F.push(D)
        }
        var aj = this,
            ag = 0,
            af, ai = [],
            ab = [],
            ah, ae, ak, ad, Q, ac, Z, T, Y, aE, J, A, V, av, am, aq, au, ao, an, ar, at, f, ap, b, M;
        THREE.Geometry.call(this);
        THREE.Loader.prototype.init_materials(aj, n, aH);
        af = {
            signature: k.substr(ag, 8),
            header_bytes: aA(k, ag + 8),
            vertex_coordinate_bytes: aA(k, ag + 9),
            normal_coordinate_bytes: aA(k, ag + 10),
            uv_coordinate_bytes: aA(k, ag + 11),
            vertex_index_bytes: aA(k, ag + 12),
            normal_index_bytes: aA(k, ag + 13),
            uv_index_bytes: aA(k, ag + 14),
            material_index_bytes: aA(k, ag + 15),
            nvertices: aF(k, ag + 16),
            nnormals: aF(k, ag + 16 + 4),
            nuvs: aF(k, ag + 16 + 8),
            ntri_flat: aF(k, ag + 16 + 12),
            ntri_smooth: aF(k, ag + 16 + 16),
            ntri_flat_uv: aF(k, ag + 16 + 20),
            ntri_smooth_uv: aF(k, ag + 16 + 24),
            nquad_flat: aF(k, ag + 16 + 28),
            nquad_smooth: aF(k, ag + 16 + 32),
            nquad_flat_uv: aF(k, ag + 16 + 36),
            nquad_smooth_uv: aF(k, ag + 16 + 40)
        };
        ag += af.header_bytes;
        ah = af.vertex_index_bytes;
        ae = af.vertex_index_bytes * 2;
        ak = af.vertex_index_bytes * 3;
        ad = af.vertex_index_bytes * 3 + af.material_index_bytes;
        Q = af.vertex_index_bytes * 3 + af.material_index_bytes + af.normal_index_bytes;
        ac = af.vertex_index_bytes * 3 + af.material_index_bytes + af.normal_index_bytes * 2;
        Z = af.vertex_index_bytes;
        T = af.vertex_index_bytes * 2;
        Y = af.vertex_index_bytes * 3;
        aE = af.vertex_index_bytes * 4;
        J = af.vertex_index_bytes * 4 + af.material_index_bytes;
        A = af.vertex_index_bytes * 4 + af.material_index_bytes + af.normal_index_bytes;
        V = af.vertex_index_bytes * 4 + af.material_index_bytes + af.normal_index_bytes * 2;
        av = af.vertex_index_bytes * 4 + af.material_index_bytes + af.normal_index_bytes * 3;
        am = af.uv_index_bytes;
        aq = af.uv_index_bytes * 2;
        au = af.uv_index_bytes;
        ao = af.uv_index_bytes * 2;
        an = af.uv_index_bytes * 3;
        aH = af.vertex_index_bytes * 3 + af.material_index_bytes;
        M = af.vertex_index_bytes * 4 + af.material_index_bytes;
        ar = af.ntri_flat * aH;
        at = af.ntri_smooth * (aH + af.normal_index_bytes * 3);
        f = af.ntri_flat_uv * (aH + af.uv_index_bytes * 3);
        ap = af.ntri_smooth_uv * (aH + af.normal_index_bytes * 3 + af.uv_index_bytes * 3);
        b = af.nquad_flat * M;
        aH = af.nquad_smooth * (M + af.normal_index_bytes * 4);
        M = af.nquad_flat_uv * (M + af.uv_index_bytes * 4);
        ag += function (x) {
            for (var u, t, e, w = af.vertex_coordinate_bytes * 3, v = x + af.nvertices * w; x < v; x += w) {
                u = aG(k, x), t = aG(k, x + af.vertex_coordinate_bytes), e = aG(k, x + af.vertex_coordinate_bytes * 2), aj.vertices.push(new THREE.Vertex(new THREE.Vector3(u, t, e)))
            }
            return af.nvertices * w
        }(ag);
        ag += function (y) {
            for (var x, w, u, v = af.normal_coordinate_bytes * 3, t = y + af.nnormals * v; y < t; y += v) {
                x = aD(k, y), w = aD(k, y + af.normal_coordinate_bytes), u = aD(k, y + af.normal_coordinate_bytes * 2), ai.push(x / 127, w / 127, u / 127)
            }
            return af.nnormals * v
        }(ag);
        ag += function (w) {
            for (var u, t, e = af.uv_coordinate_bytes * 2, v = w + af.nuvs * e; w < v; w += e) {
                u = aG(k, w), t = aG(k, w + af.uv_coordinate_bytes), ab.push(u, t)
            }
            return af.nuvs * e
        }(ag);
        ar = ag + ar;
        at = ar + at;
        f = at + f;
        ap = f + ap;
        b = ap + b;
        aH = b + aH;
        M = aH + M;
        (function (h) {
            var w, v = af.vertex_index_bytes * 3 + af.material_index_bytes,
                u = v + af.uv_index_bytes * 3,
                t = h + af.ntri_flat_uv * u;
            for (w = h; w < t; w += u) {
                aC(w), ax(w + v)
            }
            return t - h
        })(at);
        (function (h) {
            var w, v = af.vertex_index_bytes * 3 + af.material_index_bytes + af.normal_index_bytes * 3,
                u = v + af.uv_index_bytes * 3,
                t = h + af.ntri_smooth_uv * u;
            for (w = h; w < t; w += u) {
                ay(w), ax(w + v)
            }
            return t - h
        })(f);
        (function (h) {
            var w, v = af.vertex_index_bytes * 4 + af.material_index_bytes,
                u = v + af.uv_index_bytes * 4,
                t = h + af.nquad_flat_uv * u;
            for (w = h; w < t; w += u) {
                az(w), al(w + v)
            }
            return t - h
        })(aH);
        (function (h) {
            var w, v = af.vertex_index_bytes * 4 + af.material_index_bytes + af.normal_index_bytes * 4,
                u = v + af.uv_index_bytes * 4,
                t = h + af.nquad_smooth_uv * u;
            for (w = h; w < t; w += u) {
                aw(w), al(w + v)
            }
            return t - h
        })(M);
        (function (h) {
            var v, u = af.vertex_index_bytes * 3 + af.material_index_bytes,
                t = h + af.ntri_flat * u;
            for (v = h; v < t; v += u) {
                aC(v)
            }
            return t - h
        })(ag);
        (function (h) {
            var v, u = af.vertex_index_bytes * 3 + af.material_index_bytes + af.normal_index_bytes * 3,
                t = h + af.ntri_smooth * u;
            for (v = h; v < t; v += u) {
                ay(v)
            }
            return t - h
        })(ar);
        (function (h) {
            var v, u = af.vertex_index_bytes * 4 + af.material_index_bytes,
                t = h + af.nquad_flat * u;
            for (v = h; v < t; v += u) {
                az(v)
            }
            return t - h
        })(ap);
        (function (h) {
            var v, u = af.vertex_index_bytes * 4 + af.material_index_bytes + af.normal_index_bytes * 4,
                t = h + af.nquad_smooth * u;
            for (v = h; v < t; v += u) {
                aw(v)
            }
            return t - h
        })(b);
        this.computeCentroids();
        this.computeFaceNormals();
        THREE.Loader.prototype.hasNormals(this) && this.computeTangents()
    };
    m.prototype = new THREE.Geometry;
    m.prototype.constructor = m;
    p(new m(o))
};
var ColladaLoader = function () {
    function aZ(m, u, t) {
        for (var m = aD.evaluate(m, aD, ae, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), p = {}, n = m.iterateNext(), o = 0; n;) {
            n = (new u).parse(n);
            if (n.id.length == 0) {
                n.id = t + o++
            }
            p[n.id] = n;
            n = m.iterateNext()
        }
        return p
    }
    function aY() {
        var o = 1000000,
            w = -o,
            v = 0,
            u;
        for (u in Y) {
            for (var p = Y[u], t = 0; t < p.sampler.length; t++) {
                var n = p.sampler[t];
                n.create();
                o = Math.min(o, n.startTime);
                w = Math.max(w, n.endTime);
                v = Math.max(v, n.input.length)
            }
        }
        return {
            start: o,
            end: w,
            frames: v
        }
    }
    function aX(e, p, o, m) {
        e.world = e.world || new THREE.Matrix4;
        e.world.copy(e.matrix);
        if (e.channels && e.channels.length) {
            var n = e.channels[0].sampler.output[o];
            n instanceof THREE.Matrix4 && e.world.copy(n)
        }
        m && e.world.multiply(m, e.world);
        p.push(e);
        for (m = 0; m < e.nodes.length; m++) {
            aX(e.nodes[m], p, o, e.world)
        }
    }
    function aW(L, H, F) {
        var G = T[H.url];
        if (!G || !G.skin) {
            console.log("could not find skin controller!")
        } else {
            if (!H.skeleton || !H.skeleton.length) {
                console.log("could not find the skeleton for the skin!")
            } else {
                var E = aY(),
                    H = J.getChildById(H.skeleton[0], !0) || J.getChildBySid(H.skeleton[0], !0),
                    D, C, e, S, P = new THREE.Vector3,
                    R;
                for (D = 0; D < L.vertices.length; D++) {
                    G.skin.bindShapeMatrix.multiplyVector3(L.vertices[D].position)
                }
                for (F = 0; F < E.frames; F++) {
                    var O = [],
                        N = [];
                    for (D = 0; D < L.vertices.length; D++) {
                        N.push(new THREE.Vertex(new THREE.Vector3))
                    }
                    aX(H, O, F);
                    D = O;
                    C = G.skin;
                    for (S = 0; S < D.length; S++) {
                        e = D[S];
                        R = -1;
                        for (var K = 0; K < C.joints.length; K++) {
                            if (e.sid == C.joints[K]) {
                                R = K;
                                break
                            }
                        }
                        if (R >= 0) {
                            K = C.invBindMatrices[R];
                            e.invBindMatrix = K;
                            e.skinningMatrix = new THREE.Matrix4;
                            e.skinningMatrix.multiply(e.world, K);
                            e.weights = [];
                            for (K = 0; K < C.weights.length; K++) {
                                for (var I = 0; I < C.weights[K].length; I++) {
                                    var c = C.weights[K][I];
                                    c.joint == R && e.weights.push(c)
                                }
                            }
                        } else {
                            throw "could not find joint!"
                        }
                    }
                    for (D = 0; D < O.length; D++) {
                        for (C = 0; C < O[D].weights.length; C++) {
                            e = O[D].weights[C], S = e.index, e = e.weight, R = L.vertices[S], S = N[S], P.x = R.position.x, P.y = R.position.y, P.z = R.position.z, O[D].skinningMatrix.multiplyVector3(P), S.position.x += P.x * e, S.position.y += P.y * e, S.position.z += P.z * e
                        }
                    }
                    L.morphTargets.push({
                        name: "target_" + F,
                        vertices: N
                    })
                }
            }
        }
    }
    function aV(D) {
        var C = new THREE.Object3D,
            B, z, y;
        C.name = D.id || "";
        C.matrixAutoUpdate = !1;
        C.matrix = D.matrix;
        for (y = 0; y < D.controllers.length; y++) {
            var x = T[D.controllers[y].url];
            switch (x.type) {
                case "skin":
                    if (aA[x.skin.source]) {
                        var h = new aH;
                        h.url = x.skin.source;
                        h.instance_material = D.controllers[y].instance_material;
                        D.geometries.push(h);
                        B = D.controllers[y]
                    } else {
                        if (T[x.skin.source] && (z = x = T[x.skin.source], x.morph && aA[x.morph.source])) {
                            h = new aH, h.url = x.morph.source, h.instance_material = D.controllers[y].instance_material, D.geometries.push(h)
                        }
                    }
                    break;
                case "morph":
                    if (aA[x.morph.source]) {
                        h = new aH, h.url = x.morph.source, h.instance_material = D.controllers[y].instance_material, D.geometries.push(h), z = D.controllers[y]
                    }
                    console.log("DAE: morph-controller partially supported.")
            }
        }
        for (y = 0; y < D.geometries.length; y++) {
            var x = D.geometries[y],
                h = x.instance_material,
                x = aA[x.url],
                f = {}, H = 0,
                F;
            if (x && x.mesh && x.mesh.primitives) {
                if (C.name.length == 0) {
                    C.name = x.id
                }
                if (h) {
                    for (j = 0; j < h.length; j++) {
                        F = h[j];
                        var G = aO[aC[F.target].instance_effect.url].shader;
                        G.material.opacity = !G.material.opacity ? 1 : G.material.opacity;
                        F = f[F.symbol] = G.material;
                        H++
                    }
                }
                h = F || new THREE.MeshLambertMaterial({
                    color: 14540253,
                    shading: THREE.FlatShading
                });
                x = x.mesh.geometry3js;
                if (H > 1) {
                    h = new THREE.MeshFaceMaterial;
                    for (j = 0; j < x.faces.length; j++) {
                        H = x.faces[j], H.materials = [f[H.daeMaterial]]
                    }
                }
                if (B !== void 0) {
                    aW(x, B), h.morphTargets = !0, h = new THREE.SkinnedMesh(x, h), h.skeleton = B.skeleton, h.skinController = T[B.url], h.skinInstanceController = B, h.name = "skin_" + ah.length, ah.push(h)
                } else {
                    if (z !== void 0) {
                        f = x;
                        H = z instanceof aJ ? T[z.url] : z;
                        if (!H || !H.morph) {
                            console.log("could not find morph controller!")
                        } else {
                            H = H.morph;
                            for (G = 0; G < H.targets.length; G++) {
                                var E = aA[H.targets[G]];
                                if (E.mesh && E.mesh.primitives && E.mesh.primitives.length) {
                                    E = E.mesh.primitives[0].geometry, E.vertices.length === f.vertices.length && f.morphTargets.push({
                                        name: "target_1",
                                        vertices: E.vertices
                                    })
                                }
                            }
                            f.morphTargets.push({
                                name: "target_Z",
                                vertices: f.vertices
                            })
                        }
                        h.morphTargets = !0;
                        h = new THREE.Mesh(x, h);
                        h.name = "morph_" + aM.length;
                        aM.push(h)
                    } else {
                        h = new THREE.Mesh(x, h)
                    }
                }
                C.addChild(h)
            }
        }
        for (y = 0; y < D.nodes.length; y++) {
            C.addChild(aV(D.nodes[y], D))
        }
        return C
    }
    function aT() {
        this.init_from = this.id = ""
    }
    function aU() {
        this.type = this.name = this.id = "";
        this.morph = this.skin = null
    }
    function aS() {
        this.weights = this.targets = this.source = this.method = null
    }
    function aN() {
        this.source = "";
        this.bindShapeMatrix = null;
        this.invBindMatrices = [];
        this.joints = [];
        this.weights = []
    }
    function aQ() {
        this.name = this.id = "";
        this.nodes = [];
        this.scene = new THREE.Object3D
    }
    function aL() {
        this.sid = this.name = this.id = "";
        this.nodes = [];
        this.controllers = [];
        this.transforms = [];
        this.geometries = [];
        this.channels = [];
        this.matrix = new THREE.Matrix4
    }
    function aP() {
        this.type = this.sid = "";
        this.data = [];
        this.matrix = new THREE.Matrix4
    }
    function aJ() {
        this.url = "";
        this.skeleton = [];
        this.instance_material = []
    }
    function aK() {
        this.target = this.symbol = ""
    }
    function aH() {
        this.url = "";
        this.instance_material = []
    }
    function aI() {
        this.id = "";
        this.mesh = null
    }
    function au(c) {
        this.geometry = c.id;
        this.primitives = [];
        this.geometry3js = this.vertices = null
    }
    function ar() {}
    function ao() {
        this.material = "";
        this.count = 0;
        this.inputs = [];
        this.vcount = null;
        this.p = [];
        this.geometry = new THREE.Geometry
    }
    function an() {
        this.source = "";
        this.stride = this.count = 0;
        this.params = []
    }
    function aq() {
        this.input = {}
    }
    function aj() {
        this.semantic = "";
        this.offset = 0;
        this.source = "";
        this.set = 0
    }
    function ap(c) {
        this.id = c;
        this.type = null
    }
    function am() {
        this.name = this.id = "";
        this.instance_effect = null
    }
    function at() {
        this.color = new THREE.Color(0);
        this.color.setRGB(Math.random(), Math.random(), Math.random());
        this.color.a = 1;
        this.texcoord = this.texture = null
    }
    function al(e, f) {
        this.type = e;
        this.effect = f;
        this.material = null
    }
    function Z(c) {
        this.effect = c;
        this.format = this.init_from = null
    }
    function ak(c) {
        this.effect = c;
        this.mipfilter = this.magfilter = this.minfilter = this.wrap_t = this.wrap_s = this.source = null
    }
    function ai() {
        this.name = this.id = "";
        this.sampler = this.surface = this.shader = null
    }
    function ac() {
        this.url = ""
    }
    function ag() {
        this.name = this.id = "";
        this.source = {};
        this.sampler = [];
        this.channel = []
    }
    function aR(c) {
        this.animation = c;
        this.target = this.source = "";
        this.member = this.arrIndices = this.arrSyntax = this.dotSyntax = this.sid = null
    }
    function Q(c) {
        this.id = "";
        this.animation = c;
        this.inputs = [];
        this.endTime = this.startTime = this.interpolation = this.output = this.input = null;
        this.duration = 0
    }
    function M(e) {
        var f = e.getAttribute("id");
        if (ay[f] != void 0) {
            return ay[f]
        }
        ay[f] = (new ap(f)).parse(e);
        return ay[f]
    }
    function ae(c) {
        if (c == "dae") {
            return "http://www.collada.org/2005/11/COLLADASchema"
        }
        return null
    }
    function aG(f) {
        for (var f = az(f), k = [], h = 0; h < f.length; h++) {
            k.push(parseFloat(f[h]))
        }
        return k
    }
    function av(f) {
        for (var f = az(f), k = [], h = 0; h < f.length; h++) {
            k.push(parseInt(f[h], 10))
        }
        return k
    }
    function az(c) {
        return c.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/)
    }
    function aF(f, k, h) {
        return f.hasAttribute(k) ? parseInt(f.getAttribute(k), 10) : h
    }
    function ax(f, k) {
        if (f === void 0) {
            for (var h = "0."; h.length < k + 2;) {
                h += "0"
            }
            return h
        }
        k = k || 2;
        h = f.toString().split(".");
        for (h[1] = h.length > 1 ? h[1].substr(0, k) : "0"; h[1].length < k;) {
            h[1] += "0"
        }
        return h.join(".")
    }
    function aw(f, k) {
        var h = "";
        h += ax(f.x, k) + ",";
        h += ax(f.y, k) + ",";
        h += ax(f.z, k);
        return h
    }
    var aD = null,
        aE = null,
        J, ay = {}, A = {}, Y = {}, T = {}, aA = {}, aC = {}, aO = {}, aB, ab = null,
        af, aM, ah, ad = THREE.SmoothShading;
    aT.prototype.parse = function (f) {
        this.id = f.getAttribute("id");
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeName == "init_from") {
                this.init_from = h.textContent
            }
        }
        return this
    };
    aU.prototype.parse = function (f) {
        this.id = f.getAttribute("id");
        this.name = f.getAttribute("name");
        this.type = "none";
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            switch (h.nodeName) {
                case "skin":
                    this.skin = (new aN).parse(h);
                    this.type = h.nodeName;
                    break;
                case "morph":
                    this.morph = (new aS).parse(h), this.type = h.nodeName
            }
        }
        return this
    };
    aS.prototype.parse = function (h) {
        var p = {}, o = [],
            n;
        this.method = h.getAttribute("method");
        this.source = h.getAttribute("source").replace(/^#/, "");
        for (n = 0; n < h.childNodes.length; n++) {
            var m = h.childNodes[n];
            if (m.nodeType == 1) {
                switch (m.nodeName) {
                    case "source":
                        m = (new ap).parse(m);
                        p[m.id] = m;
                        break;
                    case "targets":
                        o = this.parseInputs(m);
                        break;
                    default:
                        console.log(m.nodeName)
                }
            }
        }
        for (n = 0; n < o.length; n++) {
            switch (h = o[n], m = p[h.source], h.semantic) {
                case "MORPH_TARGET":
                    this.targets = m.read();
                    break;
                case "MORPH_WEIGHT":
                    this.weights = m.read()
            }
        }
        return this
    };
    aS.prototype.parseInputs = function (h) {
        for (var n = [], m = 0; m < h.childNodes.length; m++) {
            var k = h.childNodes[m];
            if (k.nodeType == 1) {
                switch (k.nodeName) {
                    case "input":
                        n.push((new aj).parse(k))
                }
            }
        }
        return n
    };
    aN.prototype.parse = function (m) {
        var u = {}, t, p;
        this.source = m.getAttribute("source").replace(/^#/, "");
        this.invBindMatrices = [];
        this.joints = [];
        this.weights = [];
        for (var n = 0; n < m.childNodes.length; n++) {
            var o = m.childNodes[n];
            if (o.nodeType == 1) {
                switch (o.nodeName) {
                    case "bind_shape_matrix":
                        o = aG(o.textContent);
                        this.bindShapeMatrix = new THREE.Matrix4;
                        this.bindShapeMatrix.set(o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7], o[8], o[9], o[10], o[11], o[12], o[13], o[14], o[15]);
                        break;
                    case "source":
                        o = (new ap).parse(o);
                        u[o.id] = o;
                        break;
                    case "joints":
                        t = o;
                        break;
                    case "vertex_weights":
                        p = o;
                        break;
                    default:
                        console.log(o.nodeName)
                }
            }
        }
        this.parseJoints(t, u);
        this.parseWeights(p, u);
        return this
    };
    aN.prototype.parseJoints = function (h, p) {
        for (var o = 0; o < h.childNodes.length; o++) {
            var n = h.childNodes[o];
            if (n.nodeType == 1) {
                switch (n.nodeName) {
                    case "input":
                        var n = (new aj).parse(n),
                            m = p[n.source];
                        if (n.semantic == "JOINT") {
                            this.joints = m.read()
                        } else {
                            if (n.semantic == "INV_BIND_MATRIX") {
                                this.invBindMatrices = m.read()
                            }
                        }
                }
            }
        }
    };
    aN.prototype.parseWeights = function (H, G) {
        for (var F, E, C = [], D = 0; D < H.childNodes.length; D++) {
            var B = H.childNodes[D];
            if (B.nodeType == 1) {
                switch (B.nodeName) {
                    case "input":
                        C.push((new aj).parse(B));
                        break;
                    case "v":
                        F = av(B.textContent);
                        break;
                    case "vcount":
                        E = av(B.textContent)
                }
            }
        }
        for (D = B = 0; D < E.length; D++) {
            for (var z = E[D], y = [], x = 0; x < z; x++) {
                for (var N = {}, L = 0; L < C.length; L++) {
                    var K = C[L],
                        I = F[B + K.offset];
                    switch (K.semantic) {
                        case "JOINT":
                            N.joint = I;
                            break;
                        case "WEIGHT":
                            N.weight = G[K.source].data[I]
                    }
                }
                y.push(N);
                B += C.length
            }
            for (x = 0; x < y.length; x++) {
                y[x].index = D
            }
            this.weights.push(y)
        }
    };
    aQ.prototype.getChildById = function (h, n) {
        for (var m = 0; m < this.nodes.length; m++) {
            var k = this.nodes[m].getChildById(h, n);
            if (k) {
                return k
            }
        }
        return null
    };
    aQ.prototype.getChildBySid = function (h, n) {
        for (var m = 0; m < this.nodes.length; m++) {
            var k = this.nodes[m].getChildBySid(h, n);
            if (k) {
                return k
            }
        }
        return null
    };
    aQ.prototype.parse = function (f) {
        this.id = f.getAttribute("id");
        this.name = f.getAttribute("name");
        this.nodes = [];
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "node":
                        this.nodes.push((new aL).parse(h))
                }
            }
        }
        return this
    };
    aL.prototype.getChannelForTransform = function (p) {
        for (var y = 0; y < this.channels.length; y++) {
            var w = this.channels[y],
                v = w.target.split("/");
            v.shift();
            var t = v.shift(),
                u = t.indexOf(".") >= 0,
                o = t.indexOf("(") >= 0,
                x;
            if (u) {
                v = t.split("."), t = v.shift(), v.shift()
            } else {
                if (o) {
                    x = t.split("(");
                    t = x.shift();
                    for (v = 0; v < x.length; v++) {
                        x[v] = parseInt(x[v].replace(/\)/, ""))
                    }
                }
            }
            if (t == p) {
                return w.info = {
                    sid: t,
                    dotSyntax: u,
                    arrSyntax: o,
                    arrIndices: x
                }, w
            }
        }
        return null
    };
    aL.prototype.getChildById = function (h, n) {
        if (this.id == h) {
            return this
        }
        if (n) {
            for (var m = 0; m < this.nodes.length; m++) {
                var k = this.nodes[m].getChildById(h, n);
                if (k) {
                    return k
                }
            }
        }
        return null
    };
    aL.prototype.getChildBySid = function (h, n) {
        if (this.sid == h) {
            return this
        }
        if (n) {
            for (var m = 0; m < this.nodes.length; m++) {
                var k = this.nodes[m].getChildBySid(h, n);
                if (k) {
                    return k
                }
            }
        }
        return null
    };
    aL.prototype.getTransformBySid = function (e) {
        for (var f = 0; f < this.transforms.length; f++) {
            if (this.transforms[f].sid == e) {
                return this.transforms[f]
            }
        }
        return null
    };
    aL.prototype.parse = function (E) {
        var D;
        this.id = E.getAttribute("id");
        this.sid = E.getAttribute("sid");
        this.name = E.getAttribute("name");
        this.type = E.getAttribute("type");
        this.type = this.type == "JOINT" ? this.type : "NODE";
        this.nodes = [];
        this.transforms = [];
        this.geometries = [];
        this.controllers = [];
        this.matrix = new THREE.Matrix4;
        for (var C = 0; C < E.childNodes.length; C++) {
            if (D = E.childNodes[C], D.nodeType == 1) {
                switch (D.nodeName) {
                    case "node":
                        this.nodes.push((new aL).parse(D));
                        break;
                    case "instance_camera":
                        break;
                    case "instance_controller":
                        this.controllers.push((new aJ).parse(D));
                        break;
                    case "instance_geometry":
                        this.geometries.push((new aH).parse(D));
                        break;
                    case "instance_light":
                        break;
                    case "instance_node":
                        D = D.getAttribute("url").replace(/^#/, "");
                        (D = aD.evaluate(".//dae:library_nodes//dae:node[@id='" + D + "']", aD, ae, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) && this.nodes.push((new aL).parse(D));
                        break;
                    case "rotate":
                    case "translate":
                    case "scale":
                    case "matrix":
                    case "lookat":
                    case "skew":
                        this.transforms.push((new aP).parse(D));
                        break;
                    case "extra":
                        break;
                    default:
                        console.log(D.nodeName)
                }
            }
        }
        E = [];
        C = 1000000;
        D = -1000000;
        for (var B in Y) {
            for (var y = Y[B], z = 0; z < y.channel.length; z++) {
                var x = y.channel[z],
                    w = y.sampler[z];
                B = x.target.split("/")[0];
                if (B == this.id) {
                    w.create(), x.sampler = w, C = Math.min(C, w.startTime), D = Math.max(D, w.endTime), E.push(x)
                }
            }
        }
        if (E.length) {
            this.startTime = C, this.endTime = D
        }
        if ((this.channels = E) && this.channels.length) {
            B = 10000000;
            for (i = 0; i < this.channels.length; i++) {
                E = this.channels[i].sampler;
                for (C = 0; C < E.input.length - 1; C++) {
                    B = Math.min(B, E.input[C + 1] - E.input[C])
                }
            }
            C = [];
            for (E = this.startTime; E < this.endTime; E += B) {
                D = E;
                for (var y = {}, v = z = void 0, z = 0; z < this.channels.length; z++) {
                    v = this.channels[z], y[v.sid] = v
                }
                x = new THREE.Matrix4;
                for (z = 0; z < this.transforms.length; z++) {
                    if (w = this.transforms[z], v = y[w.sid], v !== void 0) {
                        for (var t = v.sampler, F, v = 0; v < t.input.length - 1; v++) {
                            if (t.input[v + 1] > D) {
                                F = t.output[v];
                                break
                            }
                        }
                        x = F !== void 0 ? F instanceof THREE.Matrix4 ? x.multiply(x, F) : x.multiply(x, w.matrix) : x.multiply(x, w.matrix)
                    } else {
                        x = x.multiply(x, w.matrix)
                    }
                }
                D = x;
                C.push({
                    time: E,
                    pos: [D.n14, D.n24, D.n34],
                    rotq: [0, 0, 0, 1],
                    scl: [1, 1, 1]
                })
            }
            this.keys = C
        }
        this.updateMatrix();
        return this
    };
    aL.prototype.updateMatrix = function () {
        this.matrix.identity();
        for (var c = 0; c < this.transforms.length; c++) {
            this.matrix.multiply(this.matrix, this.transforms[c].matrix)
        }
    };
    aP.prototype.parse = function (c) {
        this.sid = c.getAttribute("sid");
        this.type = c.nodeName;
        this.data = aG(c.textContent);
        this.updateMatrix();
        return this
    };
    aP.prototype.updateMatrix = function () {
        var c = 0;
        this.matrix.identity();
        switch (this.type) {
            case "matrix":
                this.matrix.set(this.data[0], this.data[1], this.data[2], this.data[3], this.data[4], this.data[5], this.data[6], this.data[7], this.data[8], this.data[9], this.data[10], this.data[11], this.data[12], this.data[13], this.data[14], this.data[15]);
                break;
            case "translate":
                this.matrix.setTranslation(this.data[0], this.data[1], this.data[2]);
                break;
            case "rotate":
                c = this.data[3] * (Math.PI / 180);
                this.matrix.setRotationAxis(new THREE.Vector3(this.data[0], this.data[1], this.data[2]), c);
                break;
            case "scale":
                this.matrix.setScale(this.data[0], this.data[1], this.data[2])
        }
        return this.matrix
    };
    aJ.prototype.parse = function (h) {
        this.url = h.getAttribute("url").replace(/^#/, "");
        this.skeleton = [];
        this.instance_material = [];
        for (var n = 0; n < h.childNodes.length; n++) {
            var m = h.childNodes[n];
            if (m.nodeType == 1) {
                switch (m.nodeName) {
                    case "skeleton":
                        this.skeleton.push(m.textContent.replace(/^#/, ""));
                        break;
                    case "bind_material":
                        if (m = aD.evaluate(".//dae:instance_material", m, ae, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)) {
                            for (var k = m.iterateNext(); k;) {
                                this.instance_material.push((new aK).parse(k)), k = m.iterateNext()
                            }
                        }
                }
            }
        }
        return this
    };
    aK.prototype.parse = function (c) {
        this.symbol = c.getAttribute("symbol");
        this.target = c.getAttribute("target").replace(/^#/, "");
        return this
    };
    aH.prototype.parse = function (f) {
        this.url = f.getAttribute("url").replace(/^#/, "");
        this.instance_material = [];
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1 && h.nodeName == "bind_material") {
                if (f = aD.evaluate(".//dae:instance_material", h, ae, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)) {
                    for (k = f.iterateNext(); k;) {
                        this.instance_material.push((new aK).parse(k)), k = f.iterateNext()
                    }
                }
                break
            }
        }
        return this
    };
    aI.prototype.parse = function (f) {
        this.id = f.getAttribute("id");
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            switch (h.nodeName) {
                case "mesh":
                    this.mesh = (new au(this)).parse(h)
            }
        }
        return this
    };
    au.prototype.parse = function (m) {
        function u(c, k) {
            var h = aw(c.position);
            n[h] === void 0 && (n[h] = {
                v: c,
                index: k
            });
            return n[h]
        }
        this.primitives = [];
        var t;
        for (t = 0; t < m.childNodes.length; t++) {
            var p = m.childNodes[t];
            switch (p.nodeName) {
                case "source":
                    M(p);
                    break;
                case "vertices":
                    this.vertices = (new aq).parse(p);
                    break;
                case "triangles":
                    this.primitives.push((new ao).parse(p));
                    break;
                case "polygons":
                    console.warn("polygon holes not yet supported!");
                case "polylist":
                    this.primitives.push((new ar).parse(p))
            }
        }
        var n = {};
        this.geometry3js = new THREE.Geometry;
        p = ay[this.vertices.input.POSITION.source].data;
        for (m = t = 0; t < p.length; t += 3, m++) {
            var o = new THREE.Vertex(new THREE.Vector3(p[t], p[t + 1], p[t + 2]));
            u(o, m);
            this.geometry3js.vertices.push(o)
        }
        for (t = 0; t < this.primitives.length; t++) {
            primitive = this.primitives[t], primitive.setVertices(this.vertices), this.handlePrimitive(primitive, this.geometry3js, n)
        }
        this.geometry3js.computeCentroids();
        this.geometry3js.computeFaceNormals();
        this.geometry3js.computeVertexNormals();
        this.geometry3js.computeBoundingBox();
        return this
    };
    au.prototype.handlePrimitive = function (O, L, I) {
        var H = 0,
            F, G, E = O.p,
            D = O.inputs,
            C, B, V, U = 0,
            S = 3,
            R = [];
        for (F = 0; F < D.length; F++) {
            C = D[F], C.semantic == "TEXCOORD" && R.push(C.set)
        }
        for (; H < E.length;) {
            var P = [],
                N = [],
                K = {};
            O.vcount && (S = O.vcount[U++]);
            for (F = 0; F < S; F++) {
                for (G = 0; G < D.length; G++) {
                    switch (C = D[G], source = ay[C.source], B = E[H + F * D.length + C.offset], numParams = source.accessor.params.length, V = B * numParams, C.semantic) {
                        case "VERTEX":
                            C = aw(L.vertices[B].position);
                            P.push(I[C].index);
                            break;
                        case "NORMAL":
                            N.push(new THREE.Vector3(source.data[V + 0], source.data[V + 1], source.data[V + 2]));
                            break;
                        case "TEXCOORD":
                            K[C.set] === void 0 && (K[C.set] = []), K[C.set].push(new THREE.UV(source.data[V + 0], source.data[V + 1]))
                    }
                }
            }
            G = new THREE.Face3(P[0], P[1], P[2], [N[0], N[1], N[2]]);
            G.daeMaterial = O.material;
            L.faces.push(G);
            for (G = 0; G < R.length; G++) {
                C = K[R[G]], L.faceVertexUvs[G].push([C[0], C[1], C[2]])
            }
            if (S > 3) {
                for (F = 2; F < P.length - 1; F++) {
                    G = new THREE.Face3(P[0], P[F], P[F + 1], [N[0], N[F], N[F + 1]]);
                    G.daeMaterial = O.material;
                    L.faces.push(G);
                    for (G = 0; G < R.length; G++) {
                        C = K[R[G]], L.faceVertexUvs[G].push([C[0], C[F], C[F + 1]])
                    }
                }
            }
            H += D.length * S
        }
    };
    ar.prototype = new ao;
    ar.prototype.constructor = ar;
    ao.prototype.setVertices = function (e) {
        for (var f = 0; f < this.inputs.length; f++) {
            if (this.inputs[f].source == e.id) {
                this.inputs[f].source = e.input.POSITION.source
            }
        }
    };
    ao.prototype.parse = function (f) {
        this.inputs = [];
        this.material = f.getAttribute("material");
        this.count = aF(f, "count", 0);
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            switch (h.nodeName) {
                case "input":
                    this.inputs.push((new aj).parse(f.childNodes[k]));
                    break;
                case "vcount":
                    this.vcount = av(h.textContent);
                    break;
                case "p":
                    this.p = av(h.textContent)
            }
        }
        return this
    };
    an.prototype.parse = function (h) {
        this.params = [];
        this.source = h.getAttribute("source");
        this.count = aF(h, "count", 0);
        this.stride = aF(h, "stride", 0);
        for (var n = 0; n < h.childNodes.length; n++) {
            var m = h.childNodes[n];
            if (m.nodeName == "param") {
                var k = {};
                k.name = m.getAttribute("name");
                k.type = m.getAttribute("type");
                this.params.push(k)
            }
        }
        return this
    };
    aq.prototype.parse = function (e) {
        this.id = e.getAttribute("id");
        for (var f = 0; f < e.childNodes.length; f++) {
            e.childNodes[f].nodeName == "input" && (input = (new aj).parse(e.childNodes[f]), this.input[input.semantic] = input)
        }
        return this
    };
    aj.prototype.parse = function (c) {
        this.semantic = c.getAttribute("semantic");
        this.source = c.getAttribute("source").replace(/^#/, "");
        this.set = aF(c, "set", -1);
        this.offset = aF(c, "offset", 0);
        if (this.semantic == "TEXCOORD" && this.set < 0) {
            this.set = 0
        }
        return this
    };
    ap.prototype.parse = function (m) {
        this.id = m.getAttribute("id");
        for (var u = 0; u < m.childNodes.length; u++) {
            var t = m.childNodes[u];
            switch (t.nodeName) {
                case "bool_array":
                    for (var p = az(t.textContent), n = [], o = 0; o < p.length; o++) {
                        n.push(p[o] == "true" || p[o] == "1" ? !0 : !1)
                    }
                    this.data = n;
                    this.type = t.nodeName;
                    break;
                case "float_array":
                    this.data = aG(t.textContent);
                    this.type = t.nodeName;
                    break;
                case "int_array":
                    this.data = av(t.textContent);
                    this.type = t.nodeName;
                    break;
                case "IDREF_array":
                case "Name_array":
                    this.data = az(t.textContent);
                    this.type = t.nodeName;
                    break;
                case "technique_common":
                    for (p = 0; p < t.childNodes.length; p++) {
                        if (t.childNodes[p].nodeName == "accessor") {
                            this.accessor = (new an).parse(t.childNodes[p]);
                            break
                        }
                    }
            }
        }
        return this
    };
    ap.prototype.read = function () {
        var h = [],
            n = this.accessor.params[0];
        switch (n.type) {
            case "IDREF":
            case "Name":
            case "float":
                return this.data;
            case "float4x4":
                for (n = 0; n < this.data.length; n += 16) {
                    var m = this.data.slice(n, n + 16),
                        k = new THREE.Matrix4;
                    k.set(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]);
                    h.push(k)
                }
                break;
            default:
                console.log("Dae::Source:read dont know how to read " + n.type)
        }
        return h
    };
    am.prototype.parse = function (e) {
        this.id = e.getAttribute("id");
        this.name = e.getAttribute("name");
        for (var f = 0; f < e.childNodes.length; f++) {
            if (e.childNodes[f].nodeName == "instance_effect") {
                this.instance_effect = (new ac).parse(e.childNodes[f]);
                break
            }
        }
        return this
    };
    at.prototype.isColor = function () {
        return this.texture == null
    };
    at.prototype.isTexture = function () {
        return this.texture != null
    };
    at.prototype.parse = function (f) {
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "color":
                        h = aG(h.textContent);
                        this.color = new THREE.Color(0);
                        this.color.setRGB(h[0], h[1], h[2]);
                        this.color.a = h[3];
                        break;
                    case "texture":
                        this.texture = h.getAttribute("texture"), this.texcoord = h.getAttribute("texcoord")
                }
            }
        }
        return this
    };
    al.prototype.parse = function (m) {
        for (var u = 0; u < m.childNodes.length; u++) {
            var t = m.childNodes[u];
            if (t.nodeType == 1) {
                switch (t.nodeName) {
                    case "ambient":
                    case "emission":
                    case "diffuse":
                    case "specular":
                    case "transparent":
                        this[t.nodeName] = (new at).parse(t);
                        break;
                    case "shininess":
                    case "reflectivity":
                    case "transparency":
                        var p;
                        p = aD.evaluate(".//dae:float", t, ae, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                        for (var n = p.iterateNext(), o = []; n;) {
                            o.push(n), n = p.iterateNext()
                        }
                        p = o;
                        p.length > 0 && (this[t.nodeName] = parseFloat(p[0].textContent))
                }
            }
        }
        this.create();
        return this
    };
    al.prototype.create = function () {
        var h = {}, n = this.transparency !== void 0 && this.transparency < 1,
            m;
        for (m in this) {
            switch (m) {
                case "ambient":
                case "emission":
                case "diffuse":
                case "specular":
                    var k = this[m];
                    if (k instanceof at) {
                        if (k.isTexture()) {
                            if (this.effect.sampler && this.effect.surface && this.effect.sampler.source == this.effect.surface.sid && (k = A[this.effect.surface.init_from])) {
                                h.map = THREE.ImageUtils.loadTexture(af + k.init_from), h.map.wrapS = THREE.RepeatWrapping, h.map.wrapT = THREE.RepeatWrapping, h.map.repeat.x = 1, h.map.repeat.y = -1
                            }
                        } else {
                            m == "diffuse" ? h.color = k.color.getHex() : n || (h[m] = k.color.getHex())
                        }
                    }
                    break;
                case "shininess":
                case "reflectivity":
                    h[m] = this[m];
                    break;
                case "transparency":
                    if (n) {
                        h.transparent = !0, h.opacity = this[m], n = !0
                    }
            }
        }
        h.shading = ad;
        return this.material = new THREE.MeshLambertMaterial(h)
    };
    Z.prototype.parse = function (f) {
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "init_from":
                        this.init_from = h.textContent;
                        break;
                    case "format":
                        this.format = h.textContent;
                        break;
                    default:
                        console.log("unhandled Surface prop: " + h.nodeName)
                }
            }
        }
        return this
    };
    ak.prototype.parse = function (f) {
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "source":
                        this.source = h.textContent;
                        break;
                    case "minfilter":
                        this.minfilter = h.textContent;
                        break;
                    case "magfilter":
                        this.magfilter = h.textContent;
                        break;
                    case "mipfilter":
                        this.mipfilter = h.textContent;
                        break;
                    case "wrap_s":
                        this.wrap_s = h.textContent;
                        break;
                    case "wrap_t":
                        this.wrap_t = h.textContent;
                        break;
                    default:
                        console.log("unhandled Sampler2D prop: " + h.nodeName)
                }
            }
        }
        return this
    };
    ai.prototype.create = function () {
        if (this.shader == null) {
            return null
        }
    };
    ai.prototype.parse = function (f) {
        this.id = f.getAttribute("id");
        this.name = f.getAttribute("name");
        this.shader = null;
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "profile_COMMON":
                        this.parseTechnique(this.parseProfileCOMMON(h))
                }
            }
        }
        return this
    };
    ai.prototype.parseNewparam = function (h) {
        for (var n = h.getAttribute("sid"), m = 0; m < h.childNodes.length; m++) {
            var k = h.childNodes[m];
            if (k.nodeType == 1) {
                switch (k.nodeName) {
                    case "surface":
                        this.surface = (new Z(this)).parse(k);
                        this.surface.sid = n;
                        break;
                    case "sampler2D":
                        this.sampler = (new ak(this)).parse(k);
                        this.sampler.sid = n;
                        break;
                    case "extra":
                        break;
                    default:
                        console.log(k.nodeName)
                }
            }
        }
    };
    ai.prototype.parseProfileCOMMON = function (h) {
        for (var n, m = 0; m < h.childNodes.length; m++) {
            var k = h.childNodes[m];
            if (k.nodeType == 1) {
                switch (k.nodeName) {
                    case "profile_COMMON":
                        this.parseProfileCOMMON(k);
                        break;
                    case "technique":
                        n = k;
                        break;
                    case "newparam":
                        this.parseNewparam(k);
                        break;
                    case "extra":
                        break;
                    default:
                        console.log(k.nodeName)
                }
            }
        }
        return n
    };
    ai.prototype.parseTechnique = function (f) {
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "lambert":
                    case "blinn":
                    case "phong":
                        this.shader = (new al(h.nodeName, this)).parse(h)
                }
            }
        }
    };
    ac.prototype.parse = function (c) {
        this.url = c.getAttribute("url").replace(/^#/, "");
        return this
    };
    ag.prototype.parse = function (f) {
        this.id = f.getAttribute("id");
        this.name = f.getAttribute("name");
        this.source = {};
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "source":
                        h = (new ap).parse(h);
                        this.source[h.id] = h;
                        break;
                    case "sampler":
                        this.sampler.push((new Q(this)).parse(h));
                        break;
                    case "channel":
                        this.channel.push((new aR(this)).parse(h))
                }
            }
        }
        return this
    };
    aR.prototype.parse = function (m) {
        this.source = m.getAttribute("source").replace(/^#/, "");
        this.target = m.getAttribute("target");
        var u = this.target.split("/");
        u.shift();
        var m = u.shift(),
            t = m.indexOf(".") >= 0,
            p = m.indexOf("(") >= 0,
            n, o;
        if (t) {
            u = m.split("."), m = u.shift(), o = u.shift()
        } else {
            if (p) {
                n = m.split("(");
                m = n.shift();
                for (u = 0; u < n.length; u++) {
                    n[u] = parseInt(n[u].replace(/\)/, ""))
                }
            }
        }
        this.sid = m;
        this.dotSyntax = t;
        this.arrSyntax = p;
        this.arrIndices = n;
        this.member = o;
        return this
    };
    Q.prototype.parse = function (f) {
        this.id = f.getAttribute("id");
        this.inputs = [];
        for (var k = 0; k < f.childNodes.length; k++) {
            var h = f.childNodes[k];
            if (h.nodeType == 1) {
                switch (h.nodeName) {
                    case "input":
                        this.inputs.push((new aj).parse(h))
                }
            }
        }
        return this
    };
    Q.prototype.create = function () {
        for (var f = 0; f < this.inputs.length; f++) {
            var k = this.inputs[f],
                h = this.animation.source[k.source];
            switch (k.semantic) {
                case "INPUT":
                    this.input = h.read();
                    break;
                case "OUTPUT":
                    this.output = h.read();
                    break;
                case "INTERPOLATION":
                    this.interpolation = h.read();
                    break;
                case "IN_TANGENT":
                    break;
                case "OUT_TANGENT":
                    break;
                default:
                    console.log(k.semantic)
            }
        }
        this.duration = this.endTime = this.startTime = 0;
        if (this.input.length) {
            this.startTime = 100000000;
            this.endTime = -100000000;
            for (f = 0; f < this.input.length; f++) {
                this.startTime = Math.min(this.startTime, this.input[f]), this.endTime = Math.max(this.endTime, this.input[f])
            }
            this.duration = this.endTime - this.startTime
        }
    };
    return {
        load: function (c, b) {
            if (document.implementation && document.implementation.createDocument) {
                document.implementation.createDocument("http://www.collada.org/2005/11/COLLADASchema", "COLLADA", null);
                c += "?rnd=" + Math.random();
                var h = new XMLHttpRequest;
                h.overrideMimeType && h.overrideMimeType("text/xml");
                h.onreadystatechange = function () {
                    if (h.readyState == 4 && (h.status == 0 || h.status == 200)) {
                        ab = b;
                        var k, f = c;
                        aD = h.responseXML;
                        k = ab;
                        f !== void 0 && (f = f.split("/"), f.pop(), af = f.join("/") + "/");
                        A = aZ("//dae:library_images/dae:image", aT, "image");
                        aC = aZ("//dae:library_materials/dae:material", am, "material");
                        aO = aZ("//dae:library_effects/dae:effect", ai, "effect");
                        aA = aZ("//dae:library_geometries/dae:geometry", aI, "geometry");
                        T = aZ("//dae:library_controllers/dae:controller", aU, "controller");
                        Y = aZ("//dae:library_animations/dae:animation", ag, "animation");
                        aB = aZ(".//dae:library_visual_scenes/dae:visual_scene", aQ, "visual_scene");
                        aM = [];
                        ah = [];
                        (f = aD.evaluate(".//dae:scene/dae:instance_visual_scene", aD, ae, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) ? (f = f.getAttribute("url").replace(/^#/, ""), J = aB[f]) : J = null;
                        aE = new THREE.Object3D;
                        for (f = 0; f < J.nodes.length; f++) {
                            aE.addChild(aV(J.nodes[f]))
                        }
                        aY();
                        for (var e in Y) {}
                        e = {
                            scene: aE,
                            morphs: aM,
                            skins: ah,
                            dae: {
                                images: A,
                                materials: aC,
                                effects: aO,
                                geometries: aA,
                                controllers: T,
                                animations: Y,
                                visualScenes: aB,
                                scene: J
                            }
                        };
                        k && k(e)
                    }
                };
                h.open("GET", c, !0);
                h.send(null)
            } else {
                alert("Don't know how to parse XML!")
            }
        },
        setPreferredShading: function (c) {
            ad = c
        },
        applySkin: aW,
        geometries: aA
    }
};
THREE.JSONLoader = function (c) {
    THREE.Loader.call(this, c)
};
THREE.JSONLoader.prototype = new THREE.Loader;
THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;
THREE.JSONLoader.prototype.supr = THREE.Loader.prototype;
THREE.JSONLoader.prototype.load = function (k) {
    var p = this,
        o = k.model,
        n = k.callback,
        m = k.texture_path ? k.texture_path : this.extractUrlbase(o),
        k = new Worker(o);
    k.onmessage = function (c) {
        p.createModel(c.data, n, m);
        p.onLoadComplete()
    };
    this.onLoadStart();
    k.postMessage((new Date).getTime())
};
THREE.JSONLoader.prototype.createModel = function (k, p, o) {
    var n = new THREE.Geometry,
        m = k.scale !== void 0 ? 1 / k.scale : 1;
    this.init_materials(n, k.materials, o);
    (function (Y) {
        if (k.version === void 0 || k.version != 2) {
            console.error("Deprecated file format.")
        } else {
            var X, W, Q, V, O, S, J, L, f, A, U, T, M, K, R = k.faces;
            S = k.vertices;
            var b = k.normals,
                P = k.colors,
                C = 0;
            for (X = 0; X < k.uvs.length; X++) {
                k.uvs[X].length && C++
            }
            for (X = 0; X < C; X++) {
                n.faceUvs[X] = [], n.faceVertexUvs[X] = []
            }
            V = 0;
            for (O = S.length; V < O;) {
                J = new THREE.Vertex, J.position.x = S[V++] * Y, J.position.y = S[V++] * Y, J.position.z = S[V++] * Y, n.vertices.push(J)
            }
            V = 0;
            for (O = R.length; V < O;) {
                Y = R[V++];
                S = Y & 1;
                Q = Y & 2;
                X = Y & 4;
                W = Y & 8;
                L = Y & 16;
                J = Y & 32;
                A = Y & 64;
                Y &= 128;
                S ? (U = new THREE.Face4, U.a = R[V++], U.b = R[V++], U.c = R[V++], U.d = R[V++], S = 4) : (U = new THREE.Face3, U.a = R[V++], U.b = R[V++], U.c = R[V++], S = 3);
                if (Q) {
                    Q = R[V++], U.materials = n.materials[Q]
                }
                Q = n.faces.length;
                if (X) {
                    for (X = 0; X < C; X++) {
                        T = k.uvs[X], f = R[V++], K = T[f * 2], f = T[f * 2 + 1], n.faceUvs[X][Q] = new THREE.UV(K, f)
                    }
                }
                if (W) {
                    for (X = 0; X < C; X++) {
                        T = k.uvs[X];
                        M = [];
                        for (W = 0; W < S; W++) {
                            f = R[V++], K = T[f * 2], f = T[f * 2 + 1], M[W] = new THREE.UV(K, f)
                        }
                        n.faceVertexUvs[X][Q] = M
                    }
                }
                if (L) {
                    L = R[V++] * 3, W = new THREE.Vector3, W.x = b[L++], W.y = b[L++], W.z = b[L], U.normal = W
                }
                if (J) {
                    for (X = 0; X < S; X++) {
                        L = R[V++] * 3, W = new THREE.Vector3, W.x = b[L++], W.y = b[L++], W.z = b[L], U.vertexNormals.push(W)
                    }
                }
                if (A) {
                    J = R[V++], J = new THREE.Color(P[J]), U.color = J
                }
                if (Y) {
                    for (X = 0; X < S; X++) {
                        J = R[V++], J = new THREE.Color(P[J]), U.vertexColors.push(J)
                    }
                }
                n.faces.push(U)
            }
        }
    })(m);
    (function () {
        var v, t, f, b;
        if (k.skinWeights) {
            v = 0;
            for (t = k.skinWeights.length; v < t; v += 2) {
                f = k.skinWeights[v], b = k.skinWeights[v + 1], n.skinWeights.push(new THREE.Vector4(f, b, 0, 0))
            }
        }
        if (k.skinIndices) {
            v = 0;
            for (t = k.skinIndices.length; v < t; v += 2) {
                f = k.skinIndices[v], b = k.skinIndices[v + 1], n.skinIndices.push(new THREE.Vector4(f, b, 0, 0))
            }
        }
        n.bones = k.bones;
        n.animation = k.animation
    })();
    (function (B) {
        if (k.morphTargets !== void 0) {
            var y, f, F, b, E, G, C, D, A;
            y = 0;
            for (f = k.morphTargets.length; y < f; y++) {
                n.morphTargets[y] = {};
                n.morphTargets[y].name = k.morphTargets[y].name;
                n.morphTargets[y].vertices = [];
                D = n.morphTargets[y].vertices;
                A = k.morphTargets[y].vertices;
                F = 0;
                for (b = A.length; F < b; F += 3) {
                    E = A[F] * B, G = A[F + 1] * B, C = A[F + 2] * B, D.push(new THREE.Vertex(new THREE.Vector3(E, G, C)))
                }
            }
        }
        if (k.morphColors !== void 0) {
            y = 0;
            for (f = k.morphColors.length; y < f; y++) {
                n.morphColors[y] = {};
                n.morphColors[y].name = k.morphColors[y].name;
                n.morphColors[y].colors = [];
                b = n.morphColors[y].colors;
                E = k.morphColors[y].colors;
                B = 0;
                for (F = E.length; B < F; B += 3) {
                    G = new THREE.Color(16755200), G.setRGB(E[B], E[B + 1], E[B + 2]), b.push(G)
                }
            }
        }
    })(m);
    (function () {
        if (k.edges !== void 0) {
            var t, f, b;
            for (t = 0; t < k.edges.length; t += 2) {
                f = k.edges[t], b = k.edges[t + 1], n.edges.push(new THREE.Edge(n.vertices[f], n.vertices[b], f, b))
            }
        }
    })();
    n.computeCentroids();
    n.computeFaceNormals();
    this.hasNormals(n) && n.computeTangents();
    p(n)
};
THREE.SceneLoader = function () {
    this.onLoadStart = function () {};
    this.onLoadProgress = function () {};
    this.onLoadComplete = function () {};
    this.callbackSync = function () {};
    this.callbackProgress = function () {}
};
THREE.SceneLoader.prototype = {
    load: function (k, p) {
        var o = this,
            n = new Worker(k);
        n.postMessage(0);
        var m = THREE.Loader.prototype.extractUrlbase(k);
        n.onmessage = function (au) {
            function at(f, t) {
                return t == "relativeToHTML" ? f : m + "/" + f
            }
            function aq() {
                for (ae in M.objects) {
                    if (!A.objects[ae]) {
                        if (af = M.objects[ae], af.geometry !== void 0) {
                            if (ah = A.geometries[af.geometry]) {
                                var f = !1;
                                e = [];
                                for (av = 0; av < af.materials.length; av++) {
                                    e[av] = A.materials[af.materials[av]], f = e[av] instanceof THREE.MeshShaderMaterial
                                }
                                f && ah.computeTangents();
                                ad = af.position;
                                r = af.rotation;
                                q = af.quaternion;
                                s = af.scale;
                                q = 0;
                                e.length == 0 && (e[0] = new THREE.MeshFaceMaterial);
                                e.length > 1 && (e = [new THREE.MeshFaceMaterial]);
                                object = new THREE.Mesh(ah, e);
                                object.name = ae;
                                object.position.set(ad[0], ad[1], ad[2]);
                                q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]);
                                object.scale.set(s[0], s[1], s[2]);
                                object.visible = af.visible;
                                A.scene.addObject(object);
                                A.objects[ae] = object;
                                af.meshCollider && (f = THREE.CollisionUtils.MeshColliderWBox(object), A.scene.collisions.colliders.push(f));
                                if (af.castsShadow) {
                                    f = new THREE.ShadowVolume(ah), A.scene.addChild(f), f.position = object.position, f.rotation = object.rotation, f.scale = object.scale
                                }
                                af.trigger && af.trigger.toLowerCase() != "none" && (f = {
                                    type: af.trigger,
                                    object: af
                                }, A.triggers[object.name] = f)
                            }
                        } else {
                            ad = af.position, r = af.rotation, q = af.quaternion, s = af.scale, q = 0, object = new THREE.Object3D, object.name = ae, object.position.set(ad[0], ad[1], ad[2]), q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]), object.scale.set(s[0], s[1], s[2]), object.visible = af.visible !== void 0 ? af.visible : !1, A.scene.addObject(object), A.objects[ae] = object, A.empties[ae] = object, af.trigger && af.trigger.toLowerCase() != "none" && (f = {
                                type: af.trigger,
                                object: af
                            }, A.triggers[object.name] = f)
                        }
                    }
                }
            }
            function ai(f) {
                return function (b) {
                    A.geometries[f] = b;
                    aq();
                    J -= 1;
                    o.onLoadComplete();
                    ag()
                }
            }
            function ao(f) {
                return function (b) {
                    A.geometries[f] = b
                }
            }
            function ag() {
                o.callbackProgress({
                    totalModels: c,
                    totalTextures: T,
                    loadedModels: c - J,
                    loadedTextures: T - ap
                }, A);
                o.onLoadProgress();
                J == 0 && ap == 0 && p(A)
            }
            var ak, ac, ae, Y, Z, an, al, af, ad, aj, Q, ah, ab, am, X, e, V, M, h, J, ap, c, T, A;
            M = au.data;
            X = new THREE.BinaryLoader;
            h = new THREE.JSONLoader;
            ap = J = 0;
            A = {
                scene: new THREE.Scene,
                geometries: {},
                materials: {},
                textures: {},
                objects: {},
                cameras: {},
                lights: {},
                fogs: {},
                triggers: {},
                empties: {}
            };
            au = !1;
            for (ae in M.objects) {
                if (af = M.objects[ae], af.meshCollider) {
                    au = !0;
                    break
                }
            }
            if (au) {
                A.scene.collisions = new THREE.CollisionSystem
            }
            if (M.transform) {
                au = M.transform.position;
                aj = M.transform.rotation;
                var ar = M.transform.scale;
                au && A.scene.position.set(au[0], au[1], au[2]);
                aj && A.scene.rotation.set(aj[0], aj[1], aj[2]);
                ar && A.scene.scale.set(ar[0], ar[1], ar[2]);
                (au || aj || ar) && A.scene.updateMatrix()
            }
            au = function () {
                ap -= 1;
                ag();
                o.onLoadComplete()
            };
            for (Z in M.cameras) {
                aj = M.cameras[Z];
                if (aj.type == "perspective") {
                    ab = new THREE.Camera(aj.fov, aj.aspect, aj.near, aj.far)
                } else {
                    if (aj.type == "ortho") {
                        ab = new THREE.Camera, ab.projectionMatrix = THREE.Matrix4.makeOrtho(aj.left, aj.right, aj.top, aj.bottom, aj.near, aj.far)
                    }
                }
                ad = aj.position;
                aj = aj.target;
                ab.position.set(ad[0], ad[1], ad[2]);
                ab.target.position.set(aj[0], aj[1], aj[2]);
                A.cameras[Z] = ab
            }
            for (Y in M.lights) {
                Z = M.lights[Y], ab = Z.color !== void 0 ? Z.color : 16777215, aj = Z.intensity !== void 0 ? Z.intensity : 1, Z.type == "directional" ? (ad = Z.direction, V = new THREE.DirectionalLight(ab, aj), V.position.set(ad[0], ad[1], ad[2]), V.position.normalize()) : Z.type == "point" ? (ad = Z.position, d = Z.distance, V = new THREE.PointLight(ab, aj, d), V.position.set(ad[0], ad[1], ad[2])) : Z.type == "ambient" && (V = new THREE.AmbientLight(ab)), A.scene.addLight(V), A.lights[Y] = V
            }
            for (an in M.fogs) {
                Y = M.fogs[an], Y.type == "linear" ? am = new THREE.Fog(0, Y.near, Y.far) : Y.type == "exp2" && (am = new THREE.FogExp2(0, Y.density)), aj = Y.color, am.color.setRGB(aj[0], aj[1], aj[2]), A.fogs[an] = am
            }
            if (A.cameras && M.defaults.camera) {
                A.currentCamera = A.cameras[M.defaults.camera]
            }
            if (A.fogs && M.defaults.fog) {
                A.scene.fog = A.fogs[M.defaults.fog]
            }
            aj = M.defaults.bgcolor;
            A.bgColor = new THREE.Color;
            A.bgColor.setRGB(aj[0], aj[1], aj[2]);
            A.bgColorAlpha = M.defaults.bgalpha;
            for (ak in M.geometries) {
                if (an = M.geometries[ak], an.type == "bin_mesh" || an.type == "ascii_mesh") {
                    J += 1, o.onLoadStart()
                }
            }
            c = J;
            for (ak in M.geometries) {
                an = M.geometries[ak], an.type == "cube" ? (ah = new THREE.CubeGeometry(an.width, an.height, an.depth, an.segmentsWidth, an.segmentsHeight, an.segmentsDepth, null, an.flipped, an.sides), A.geometries[ak] = ah) : an.type == "plane" ? (ah = new THREE.PlaneGeometry(an.width, an.height, an.segmentsWidth, an.segmentsHeight), A.geometries[ak] = ah) : an.type == "sphere" ? (ah = new THREE.SphereGeometry(an.radius, an.segmentsWidth, an.segmentsHeight), A.geometries[ak] = ah) : an.type == "cylinder" ? (ah = new THREE.CylinderGeometry(an.numSegs, an.topRad, an.botRad, an.height, an.topOffset, an.botOffset), A.geometries[ak] = ah) : an.type == "torus" ? (ah = new THREE.TorusGeometry(an.radius, an.tube, an.segmentsR, an.segmentsT), A.geometries[ak] = ah) : an.type == "icosahedron" ? (ah = new THREE.IcosahedronGeometry(an.subdivisions), A.geometries[ak] = ah) : an.type == "bin_mesh" ? X.load({
                    model: at(an.url, M.urlBaseType),
                    callback: ai(ak)
                }) : an.type == "ascii_mesh" ? h.load({
                    model: at(an.url, M.urlBaseType),
                    callback: ai(ak)
                }) : an.type == "embedded_mesh" && (an = M.embeds[an.id]) && h.createModel(an, ao(ak), "")
            }
            for (al in M.textures) {
                if (ak = M.textures[al], ak.url instanceof Array) {
                    ap += ak.url.length;
                    for (X = 0; X < ak.url.length; X++) {
                        o.onLoadStart()
                    }
                } else {
                    ap += 1, o.onLoadStart()
                }
            }
            T = ap;
            for (al in M.textures) {
                ak = M.textures[al];
                if (ak.mapping != void 0 && THREE[ak.mapping] != void 0) {
                    ak.mapping = new THREE[ak.mapping]
                }
                if (ak.url instanceof Array) {
                    X = [];
                    for (var av = 0; av < ak.url.length; av++) {
                        X[av] = at(ak.url[av], M.urlBaseType)
                    }
                    X = THREE.ImageUtils.loadTextureCube(X, ak.mapping, au)
                } else {
                    X = THREE.ImageUtils.loadTexture(at(ak.url, M.urlBaseType), ak.mapping, au);
                    if (THREE[ak.minFilter] != void 0) {
                        X.minFilter = THREE[ak.minFilter]
                    }
                    if (THREE[ak.magFilter] != void 0) {
                        X.magFilter = THREE[ak.magFilter]
                    }
                    if (ak.repeat) {
                        X.repeat.set(ak.repeat[0], ak.repeat[1]);
                        if (ak.repeat[0] != 1) {
                            X.wrapS = THREE.RepeatWrapping
                        }
                        if (ak.repeat[1] != 1) {
                            X.wrapT = THREE.RepeatWrapping
                        }
                    }
                    ak.offset && X.offset.set(ak.offset[0], ak.offset[1]);
                    if (ak.wrap) {
                        h = {
                            repeat: THREE.RepeatWrapping,
                            mirror: THREE.MirroredRepeatWrapping
                        };
                        if (h[ak.wrap[0]] !== void 0) {
                            X.wrapS = h[ak.wrap[0]]
                        }
                        if (h[ak.wrap[1]] !== void 0) {
                            X.wrapT = h[ak.wrap[1]]
                        }
                    }
                }
                A.textures[al] = X
            }
            for (ac in M.materials) {
                al = M.materials[ac];
                for (Q in al.parameters) {
                    if (Q == "envMap" || Q == "map" || Q == "lightMap") {
                        al.parameters[Q] = A.textures[al.parameters[Q]]
                    } else {
                        if (Q == "shading") {
                            al.parameters[Q] = al.parameters[Q] == "flat" ? THREE.FlatShading : THREE.SmoothShading
                        } else {
                            if (Q == "blending") {
                                al.parameters[Q] = THREE[al.parameters[Q]] ? THREE[al.parameters[Q]] : THREE.NormalBlending
                            } else {
                                if (Q == "combine") {
                                    al.parameters[Q] = al.parameters[Q] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation
                                } else {
                                    if (Q == "vertexColors") {
                                        if (al.parameters[Q] == "face") {
                                            al.parameters[Q] = THREE.FaceColors
                                        } else {
                                            if (al.parameters[Q]) {
                                                al.parameters[Q] = THREE.VertexColors
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (al.parameters.opacity !== void 0 && al.parameters.opacity < 1) {
                    al.parameters.transparent = !0
                }
                if (al.parameters.normalMap) {
                    ak = THREE.ShaderUtils.lib.normal;
                    au = THREE.UniformsUtils.clone(ak.uniforms);
                    X = al.parameters.color;
                    h = al.parameters.specular;
                    an = al.parameters.ambient;
                    am = al.parameters.shininess;
                    au.tNormal.texture = A.textures[al.parameters.normalMap];
                    if (al.parameters.normalMapFactor) {
                        au.uNormalScale.value = al.parameters.normalMapFactor
                    }
                    if (al.parameters.map) {
                        au.tDiffuse.texture = al.parameters.map, au.enableDiffuse.value = !0
                    }
                    if (al.parameters.lightMap) {
                        au.tAO.texture = al.parameters.lightMap, au.enableAO.value = !0
                    }
                    if (al.parameters.specularMap) {
                        au.tSpecular.texture = A.textures[al.parameters.specularMap], au.enableSpecular.value = !0
                    }
                    au.uDiffuseColor.value.setHex(X);
                    au.uSpecularColor.value.setHex(h);
                    au.uAmbientColor.value.setHex(an);
                    au.uShininess.value = am;
                    if (al.parameters.opacity) {
                        au.uOpacity.value = al.parameters.opacity
                    }
                    al = new THREE.MeshShaderMaterial({
                        fragmentShader: ak.fragmentShader,
                        vertexShader: ak.vertexShader,
                        uniforms: au,
                        lights: !0,
                        fog: !0
                    })
                } else {
                    al = new THREE[al.type](al.parameters)
                }
                A.materials[ac] = al
            }
            aq();
            o.callbackSync(A)
        }
    },
    constructor: THREE.SceneLoader
};
THREE.UTF8Loader = function () {};
THREE.UTF8Loader.prototype = new THREE.UTF8Loader;
THREE.UTF8Loader.prototype.constructor = THREE.UTF8Loader;
THREE.UTF8Loader.prototype.load = function (p) {
    var y = new XMLHttpRequest,
        w = p.model,
        v = p.callback,
        u = p.scale !== void 0 ? p.scale : 1,
        o = p.offsetX !== void 0 ? p.offsetX : 0,
        t = p.offsetY !== void 0 ? p.offsetY : 0,
        x = p.offsetZ !== void 0 ? p.offsetZ : 0;
    y.onreadystatechange = function () {
        y.readyState == 4 ? y.status == 200 || y.status == 0 ? THREE.UTF8Loader.prototype.createModel(y.responseText, v, u, o, t, x) : alert("Couldn't load [" + w + "] [" + y.status + "]") : y.readyState != 3 && y.readyState == 2 && y.getResponseHeader("Content-Length")
    };
    y.open("GET", w, !0);
    y.send(null)
};
THREE.UTF8Loader.prototype.decompressMesh = function (p) {
    var y = p.charCodeAt(0);
    y >= 57344 && (y -= 2048);
    y++;
    for (var w = new Float32Array(8 * y), v = 1, u = 0; u < 8; u++) {
        for (var o = 0, t = 0; t < y; ++t) {
            var x = p.charCodeAt(t + v);
            o += x >> 1 ^ -(x & 1);
            w[8 * t + u] = o
        }
        v += y
    }
    y = p.length - v;
    o = new Uint16Array(y);
    for (u = t = 0; u < y; u++) {
        x = p.charCodeAt(u + v), o[u] = t - x, x == 0 && t++
    }
    return [w, o]
};
THREE.UTF8Loader.prototype.createModel = function (o, w, v, u, t, n) {
    var p = function () {
        var h = this;
        h.materials = [];
        THREE.Geometry.call(this);
        var e = THREE.UTF8Loader.prototype.decompressMesh(o),
            f = [],
            b = [];
        (function (c, x, A) {
            for (var y, m, C, z = c.length; A < z; A += x) {
                y = c[A], m = c[A + 1], C = c[A + 2], y = y / 16383 * v, m = m / 16383 * v, C = C / 16383 * v, y += u, m += t, C += n, h.vertices.push(new THREE.Vertex(new THREE.Vector3(y, m, C)))
            }
        })(e[0], 8, 0);
        (function (m, B, A) {
            for (var z, y, x = m.length; A < x; A += B) {
                z = m[A], y = m[A + 1], z /= 1023, y /= 1023, b.push(z, y)
            }
        })(e[0], 8, 3);
        (function (y, D, C) {
            for (var B, A, z, x = y.length; C < x; C += D) {
                B = y[C], A = y[C + 1], z = y[C + 2], B = (B - 512) / 511, A = (A - 512) / 511, z = (z - 512) / 511, f.push(B, A, z)
            }
        })(e[0], 8, 5);
        (function (Y) {
            var X, W, V, T, S, P, J, D, Q, y = Y.length;
            for (X = 0; X < y; X += 3) {
                W = Y[X];
                V = Y[X + 1];
                T = Y[X + 2];
                S = h;
                D = W;
                Q = V;
                P = T;
                J = W;
                var M = V,
                    B = T,
                    R = S.materials[0],
                    A = f[M * 3],
                    c = f[M * 3 + 1],
                    M = f[M * 3 + 2],
                    z = f[B * 3],
                    x = f[B * 3 + 1],
                    B = f[B * 3 + 2];
                J = new THREE.Vector3(f[J * 3], f[J * 3 + 1], f[J * 3 + 2]);
                M = new THREE.Vector3(A, c, M);
                B = new THREE.Vector3(z, x, B);
                S.faces.push(new THREE.Face3(D, Q, P, [J, M, B], null, R));
                S = b[W * 2];
                W = b[W * 2 + 1];
                P = b[V * 2];
                J = b[V * 2 + 1];
                D = b[T * 2];
                Q = b[T * 2 + 1];
                T = h.faceVertexUvs[0];
                V = P;
                P = J;
                J = [];
                J.push(new THREE.UV(S, W));
                J.push(new THREE.UV(V, P));
                J.push(new THREE.UV(D, Q));
                T.push(J)
            }
        })(e[1]);
        this.computeCentroids();
        this.computeFaceNormals()
    };
    p.prototype = new THREE.Geometry;
    p.prototype.constructor = p;
    w(new p)
};
THREE.MarchingCubes = function (e, f) {
    THREE.Object3D.call(this);
    this.materials = f instanceof Array ? f : [f];
    this.init = function (c) {
        this.isolation = 80;
        this.size = c;
        this.size2 = this.size * this.size;
        this.size3 = this.size2 * this.size;
        this.halfsize = this.size / 2;
        this.delta = 2 / this.size;
        this.yd = this.size;
        this.zd = this.size2;
        this.field = new Float32Array(this.size3);
        this.normal_cache = new Float32Array(this.size3 * 3);
        this.vlist = new Float32Array(36);
        this.nlist = new Float32Array(36);
        this.firstDraw = !0;
        this.maxCount = 4096;
        this.count = 0;
        this.hasNormal = this.hasPos = !1;
        this.positionArray = new Float32Array(this.maxCount * 3);
        this.normalArray = new Float32Array(this.maxCount * 3)
    };
    this.lerp = function (k, n, m) {
        return k + (n - k) * m
    };
    this.VIntX = function (B, A, z, x, y, w, D, o, C, E) {
        y = (y - C) / (E - C);
        C = this.normal_cache;
        A[x] = w + y * this.delta;
        A[x + 1] = D;
        A[x + 2] = o;
        z[x] = this.lerp(C[B], C[B + 3], y);
        z[x + 1] = this.lerp(C[B + 1], C[B + 4], y);
        z[x + 2] = this.lerp(C[B + 2], C[B + 5], y)
    };
    this.VIntY = function (B, A, z, x, y, w, D, o, C, E) {
        y = (y - C) / (E - C);
        C = this.normal_cache;
        A[x] = w;
        A[x + 1] = D + y * this.delta;
        A[x + 2] = o;
        A = B + this.yd * 3;
        z[x] = this.lerp(C[B], C[A], y);
        z[x + 1] = this.lerp(C[B + 1], C[A + 1], y);
        z[x + 2] = this.lerp(C[B + 2], C[A + 2], y)
    };
    this.VIntZ = function (B, A, z, x, y, w, D, o, C, E) {
        y = (y - C) / (E - C);
        C = this.normal_cache;
        A[x] = w;
        A[x + 1] = D;
        A[x + 2] = o + y * this.delta;
        A = B + this.zd * 3;
        z[x] = this.lerp(C[B], C[A], y);
        z[x + 1] = this.lerp(C[B + 1], C[A + 1], y);
        z[x + 2] = this.lerp(C[B + 2], C[A + 2], y)
    };
    this.compNorm = function (h) {
        var k = h * 3;
        this.normal_cache[k] == 0 && (this.normal_cache[k] = this.field[h - 1] - this.field[h + 1], this.normal_cache[k + 1] = this.field[h - this.yd] - this.field[h + this.yd], this.normal_cache[k + 2] = this.field[h - this.zd] - this.field[h + this.zd])
    };
    this.polygonize = function (ak, aj, ai, ag, ah, af) {
        var Y = ag + 1,
            ae = ag + this.yd,
            W = ag + this.zd,
            aa = Y + this.yd,
            R = Y + this.zd,
            T = ag + this.yd + this.zd,
            O = Y + this.yd + this.zd,
            P = 0,
            ad = this.field[ag],
            ab = this.field[Y],
            V = this.field[ae],
            S = this.field[aa],
            Z = this.field[W],
            A = this.field[R],
            X = this.field[T],
            Q = this.field[O];
        ad < ah && (P |= 1);
        ab < ah && (P |= 2);
        V < ah && (P |= 8);
        S < ah && (P |= 4);
        Z < ah && (P |= 16);
        A < ah && (P |= 32);
        X < ah && (P |= 128);
        Q < ah && (P |= 64);
        var ac = THREE.edgeTable[P];
        if (ac == 0) {
            return 0
        }
        var M = this.delta,
            o = ak + M,
            J = aj + M,
            M = ai + M;
        ac & 1 && (this.compNorm(ag), this.compNorm(Y), this.VIntX(ag * 3, this.vlist, this.nlist, 0, ah, ak, aj, ai, ad, ab));
        ac & 2 && (this.compNorm(Y), this.compNorm(aa), this.VIntY(Y * 3, this.vlist, this.nlist, 3, ah, o, aj, ai, ab, S));
        ac & 4 && (this.compNorm(ae), this.compNorm(aa), this.VIntX(ae * 3, this.vlist, this.nlist, 6, ah, ak, J, ai, V, S));
        ac & 8 && (this.compNorm(ag), this.compNorm(ae), this.VIntY(ag * 3, this.vlist, this.nlist, 9, ah, ak, aj, ai, ad, V));
        ac & 16 && (this.compNorm(W), this.compNorm(R), this.VIntX(W * 3, this.vlist, this.nlist, 12, ah, ak, aj, M, Z, A));
        ac & 32 && (this.compNorm(R), this.compNorm(O), this.VIntY(R * 3, this.vlist, this.nlist, 15, ah, o, aj, M, A, Q));
        ac & 64 && (this.compNorm(T), this.compNorm(O), this.VIntX(T * 3, this.vlist, this.nlist, 18, ah, ak, J, M, X, Q));
        ac & 128 && (this.compNorm(W), this.compNorm(T), this.VIntY(W * 3, this.vlist, this.nlist, 21, ah, ak, aj, M, Z, X));
        ac & 256 && (this.compNorm(ag), this.compNorm(W), this.VIntZ(ag * 3, this.vlist, this.nlist, 24, ah, ak, aj, ai, ad, Z));
        ac & 512 && (this.compNorm(Y), this.compNorm(R), this.VIntZ(Y * 3, this.vlist, this.nlist, 27, ah, o, aj, ai, ab, A));
        ac & 1024 && (this.compNorm(aa), this.compNorm(O), this.VIntZ(aa * 3, this.vlist, this.nlist, 30, ah, o, J, ai, S, Q));
        ac & 2048 && (this.compNorm(ae), this.compNorm(T), this.VIntZ(ae * 3, this.vlist, this.nlist, 33, ah, ak, J, ai, V, X));
        P <<= 4;
        for (ah = ag = 0; THREE.triTable[P + ah] != -1;) {
            ak = P + ah, aj = ak + 1, ai = ak + 2, this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[ak], 3 * THREE.triTable[aj], 3 * THREE.triTable[ai], af), ah += 3, ag++
        }
        return ag
    };
    this.posnormtriv = function (p, y, w, o, t, x) {
        var v = this.count * 3;
        this.positionArray[v] = p[w];
        this.positionArray[v + 1] = p[w + 1];
        this.positionArray[v + 2] = p[w + 2];
        this.positionArray[v + 3] = p[o];
        this.positionArray[v + 4] = p[o + 1];
        this.positionArray[v + 5] = p[o + 2];
        this.positionArray[v + 6] = p[t];
        this.positionArray[v + 7] = p[t + 1];
        this.positionArray[v + 8] = p[t + 2];
        this.normalArray[v] = y[w];
        this.normalArray[v + 1] = y[w + 1];
        this.normalArray[v + 2] = y[w + 2];
        this.normalArray[v + 3] = y[o];
        this.normalArray[v + 4] = y[o + 1];
        this.normalArray[v + 5] = y[o + 2];
        this.normalArray[v + 6] = y[t];
        this.normalArray[v + 7] = y[t + 1];
        this.normalArray[v + 8] = y[t + 2];
        this.hasNormal = this.hasPos = !0;
        this.count += 3;
        this.count >= this.maxCount - 3 && x(this)
    };
    this.begin = function () {
        this.count = 0;
        this.hasNormal = this.hasPos = !1
    };
    this.end = function (h) {
        if (this.count != 0) {
            for (var k = this.count * 3; k < this.positionArray.length; k++) {
                this.positionArray[k] = 0
            }
            h(this)
        }
    };
    this.addBall = function (U, T, S, Q, R) {
        var P = this.size * Math.sqrt(Q / R),
            K = S * this.size,
            O = T * this.size,
            J = U * this.size,
            L = Math.floor(K - P);
        L < 1 && (L = 1);
        K = Math.floor(K + P);
        K > this.size - 1 && (K = this.size - 1);
        var C = Math.floor(O - P);
        C < 1 && (C = 1);
        O = Math.floor(O + P);
        O > this.size - 1 && (O = this.size - 1);
        var F = Math.floor(J - P);
        F < 1 && (F = 1);
        P = Math.floor(J + P);
        P > this.size - 1 && (P = this.size - 1);
        for (var o, A, N, M, I, E; L < K; L++) {
            J = this.size2 * L;
            A = L / this.size - S;
            I = A * A;
            for (A = C; A < O; A++) {
                N = J + this.size * A;
                o = A / this.size - T;
                E = o * o;
                for (o = F; o < P; o++) {
                    M = o / this.size - U, M = Q / (0.000001 + M * M + E + I) - R, M > 0 && (this.field[N + o] += M)
                }
            }
        }
    };
    this.addPlaneX = function (D, C) {
        var B, z, A, y, H, o = this.size,
            G = this.yd,
            I = this.zd,
            E = this.field,
            F = o * Math.sqrt(D / C);
        F > o && (F = o);
        for (B = 0; B < F; B++) {
            if (z = B / o, z *= z, y = D / (0.0001 + z) - C, y > 0) {
                for (z = 0; z < o; z++) {
                    H = B + z * G;
                    for (A = 0; A < o; A++) {
                        E[I * A + H] += y
                    }
                }
            }
        }
    };
    this.addPlaneY = function (F, E) {
        var C, A, B, y, J, o, I = this.size,
            K = this.yd,
            G = this.zd,
            H = this.field,
            D = I * Math.sqrt(F / E);
        D > I && (D = I);
        for (A = 0; A < D; A++) {
            if (C = A / I, C *= C, y = F / (0.0001 + C) - E, y > 0) {
                J = A * K;
                for (C = 0; C < I; C++) {
                    o = J + C;
                    for (B = 0; B < I; B++) {
                        H[G * B + o] += y
                    }
                }
            }
        }
    };
    this.addPlaneZ = function (t, A) {
        var x, o, v, z, w, y;
        size = this.size;
        yd = this.yd;
        zd = this.zd;
        field = this.field;
        dist = size * Math.sqrt(t / A);
        dist > size && (dist = size);
        for (v = 0; v < dist; v++) {
            if (x = v / size, x *= x, z = t / (0.0001 + x) - A, z > 0) {
                w = zd * v;
                for (o = 0; o < size; o++) {
                    y = w + o * yd;
                    for (x = 0; x < size; x++) {
                        field[y + x] += z
                    }
                }
            }
        }
    };
    this.reset = function () {
        var c;
        for (c = 0; c < this.size3; c++) {
            this.normal_cache[c * 3] = 0, this.field[c] = 0
        }
    };
    this.render = function (C) {
        this.begin();
        var B, A, y, z, w, F, o, E, G, D = this.size - 2;
        for (z = 1; z < D; z++) {
            G = this.size2 * z;
            o = (z - this.halfsize) / this.halfsize;
            for (y = 1; y < D; y++) {
                E = G + this.size * y;
                F = (y - this.halfsize) / this.halfsize;
                for (A = 1; A < D; A++) {
                    w = (A - this.halfsize) / this.halfsize, B = E + A, this.polygonize(w, F, o, B, this.isolation, C)
                }
            }
        }
        this.end(C)
    };
    this.generateGeometry = function () {
        var k = 0,
            n = new THREE.Geometry,
            m = [];
        this.render(function (h) {
            var o, c, B, b, A, C, y, z;
            for (o = 0; o < h.count; o++) {
                y = o * 3, A = y + 1, z = y + 2, c = h.positionArray[y], B = h.positionArray[A], b = h.positionArray[z], C = new THREE.Vector3(c, B, b), c = h.normalArray[y], B = h.normalArray[A], b = h.normalArray[z], y = new THREE.Vector3(c, B, b), y.normalize(), A = new THREE.Vertex(C), n.vertices.push(A), m.push(y)
            }
            nfaces = h.count / 3;
            for (o = 0; o < nfaces; o++) {
                y = (k + o) * 3, A = y + 1, z = y + 2, C = m[y], c = m[A], B = m[z], y = new THREE.Face3(y, A, z, [C, c, B]), n.faces.push(y)
            }
            k += nfaces;
            h.count = 0
        });
        return n
    };
    this.init(e)
};
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]);
THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, 10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1, 6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1, 8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
THREE.Trident = function (k) {
    function p(b) {
        return new THREE.Mesh(new THREE.CylinderGeometry(30, 0.1, k.length / 20, k.length / 5), new THREE.MeshBasicMaterial({
            color: b
        }))
    }
    function o(f, t) {
        var h = new THREE.Geometry;
        h.vertices = [new THREE.Vertex, new THREE.Vertex(f)];
        return new THREE.Line(h, new THREE.LineBasicMaterial({
            color: t
        }))
    }
    THREE.Object3D.call(this);
    var n = Math.PI / 2,
        m, k = k || THREE.Trident.defaultParams;
    if (k !== THREE.Trident.defaultParams) {
        for (m in THREE.Trident.defaultParams) {
            k.hasOwnProperty(m) || (k[m] = THREE.Trident.defaultParams[m])
        }
    }
    this.scale = new THREE.Vector3(k.scale, k.scale, k.scale);
    this.addChild(o(new THREE.Vector3(k.length, 0, 0), k.xAxisColor));
    this.addChild(o(new THREE.Vector3(0, k.length, 0), k.yAxisColor));
    this.addChild(o(new THREE.Vector3(0, 0, k.length), k.zAxisColor));
    if (k.showArrows) {
        m = p(k.xAxisColor), m.rotation.y = -n, m.position.x = k.length, this.addChild(m), m = p(k.yAxisColor), m.rotation.x = n, m.position.y = k.length, this.addChild(m), m = p(k.zAxisColor), m.rotation.y = Math.PI, m.position.z = k.length, this.addChild(m)
    }
};
THREE.Trident.prototype = new THREE.Object3D;
THREE.Trident.prototype.constructor = THREE.Trident;
THREE.Trident.defaultParams = {
    xAxisColor: 16711680,
    yAxisColor: 65280,
    zAxisColor: 255,
    showArrows: !0,
    length: 100,
    scale: 1
};
THREE.PlaneCollider = function (e, f) {
    this.point = e;
    this.normal = f
};
THREE.SphereCollider = function (e, f) {
    this.center = e;
    this.radius = f;
    this.radiusSq = f * f
};
THREE.BoxCollider = function (e, f) {
    this.min = e;
    this.max = f;
    this.dynamic = !0;
    this.normal = new THREE.Vector3
};
THREE.MeshCollider = function (e, f) {
    this.mesh = e;
    this.box = f;
    this.numFaces = this.mesh.geometry.faces.length;
    this.normal = new THREE.Vector3
};
THREE.CollisionSystem = function () {
    this.collisionNormal = new THREE.Vector3;
    this.colliders = [];
    this.hits = []
};
THREE.Collisions = new THREE.CollisionSystem;
THREE.CollisionSystem.prototype.merge = function (c) {
    this.colliders = this.colliders.concat(c.colliders);
    this.hits = this.hits.concat(c.hits)
};
THREE.CollisionSystem.prototype.rayCastAll = function (n) {
    n.direction.normalize();
    this.hits.length = 0;
    var u, t, p, o, k = 0;
    u = 0;
    for (t = this.colliders.length; u < t; u++) {
        if (o = this.colliders[u], p = this.rayCast(n, o), p < Number.MAX_VALUE) {
            o.distance = p, p > k ? this.hits.push(o) : this.hits.unshift(o), k = p
        }
    }
    return this.hits
};
THREE.CollisionSystem.prototype.rayCastNearest = function (h) {
    var n = this.rayCastAll(h);
    if (n.length == 0) {
        return null
    }
    for (var m = 0; n[m] instanceof THREE.MeshCollider;) {
        var k = this.rayMesh(h, n[m]);
        if (k.dist < Number.MAX_VALUE) {
            n[m].distance = k.dist;
            n[m].faceIndex = k.faceIndex;
            break
        }
        m++
    }
    if (m > n.length) {
        return null
    }
    return n[m]
};
THREE.CollisionSystem.prototype.rayCast = function (e, f) {
    if (f instanceof THREE.PlaneCollider) {
        return this.rayPlane(e, f)
    } else {
        if (f instanceof THREE.SphereCollider) {
            return this.raySphere(e, f)
        } else {
            if (f instanceof THREE.BoxCollider) {
                return this.rayBox(e, f)
            } else {
                if (f instanceof THREE.MeshCollider && f.box) {
                    return this.rayBox(e, f.box)
                }
            }
        }
    }
};
THREE.CollisionSystem.prototype.rayMesh = function (C, B) {
    for (var A = this.makeRayLocal(C, B.mesh), z = Number.MAX_VALUE, y, w = 0; w < B.numFaces; w++) {
        var x = B.mesh.geometry.faces[w],
            t = B.mesh.geometry.vertices[x.a].position,
            E = B.mesh.geometry.vertices[x.b].position,
            o = B.mesh.geometry.vertices[x.c].position,
            D = x instanceof THREE.Face4 ? B.mesh.geometry.vertices[x.d].position : null;
        x instanceof THREE.Face3 ? (x = this.rayTriangle(A, t, E, o, z, this.collisionNormal, B.mesh), x < z && (z = x, y = w, B.normal.copy(this.collisionNormal), B.normal.normalize())) : x instanceof THREE.Face4 && (x = this.rayTriangle(A, t, E, D, z, this.collisionNormal, B.mesh), x < z && (z = x, y = w, B.normal.copy(this.collisionNormal), B.normal.normalize()), x = this.rayTriangle(A, E, o, D, z, this.collisionNormal, B.mesh), x < z && (z = x, y = w, B.normal.copy(this.collisionNormal), B.normal.normalize()))
    }
    return {
        dist: z,
        faceIndex: y
    }
};
THREE.CollisionSystem.prototype.rayTriangle = function (z, y, x, w, v, p, t) {
    var o = THREE.CollisionSystem.__v1,
        A = THREE.CollisionSystem.__v2;
    p.set(0, 0, 0);
    o.sub(x, y);
    A.sub(w, x);
    p.cross(o, A);
    o = p.dot(z.direction);
    if (!(o < 0)) {
        if (t.doubleSided || t.flipSided) {
            p.multiplyScalar(-1), o *= -1
        } else {
            return Number.MAX_VALUE
        }
    }
    t = p.dot(y) - p.dot(z.origin);
    if (!(t <= 0)) {
        return Number.MAX_VALUE
    }
    if (!(t >= o * v)) {
        return Number.MAX_VALUE
    }
    t /= o;
    o = THREE.CollisionSystem.__v3;
    o.copy(z.direction);
    o.multiplyScalar(t);
    o.addSelf(z.origin);
    Math.abs(p.x) > Math.abs(p.y) ? Math.abs(p.x) > Math.abs(p.z) ? (z = o.y - y.y, p = x.y - y.y, v = w.y - y.y, o = o.z - y.z, x = x.z - y.z, w = w.z - y.z) : (z = o.x - y.x, p = x.x - y.x, v = w.x - y.x, o = o.y - y.y, x = x.y - y.y, w = w.y - y.y) : Math.abs(p.y) > Math.abs(p.z) ? (z = o.x - y.x, p = x.x - y.x, v = w.x - y.x, o = o.z - y.z, x = x.z - y.z, w = w.z - y.z) : (z = o.x - y.x, p = x.x - y.x, v = w.x - y.x, o = o.y - y.y, x = x.y - y.y, w = w.y - y.y);
    y = p * w - x * v;
    if (y == 0) {
        return Number.MAX_VALUE
    }
    y = 1 / y;
    w = (z * w - o * v) * y;
    if (!(w >= 0)) {
        return Number.MAX_VALUE
    }
    y *= p * o - x * z;
    if (!(y >= 0)) {
        return Number.MAX_VALUE
    }
    if (!(1 - w - y >= 0)) {
        return Number.MAX_VALUE
    }
    return t
};
THREE.CollisionSystem.prototype.makeRayLocal = function (h, n) {
    var m = THREE.CollisionSystem.__m;
    THREE.Matrix4.makeInvert(n.matrixWorld, m);
    var k = THREE.CollisionSystem.__r;
    k.origin.copy(h.origin);
    k.direction.copy(h.direction);
    m.multiplyVector3(k.origin);
    m.rotateAxis(k.direction);
    k.direction.normalize();
    return k
};
THREE.CollisionSystem.prototype.rayBox = function (B, A) {
    var z;
    A.dynamic && A.mesh && A.mesh.matrixWorld ? z = this.makeRayLocal(B, A.mesh) : (z = THREE.CollisionSystem.__r, z.origin.copy(B.origin), z.direction.copy(B.direction));
    var y = 0,
        x = 0,
        v = 0,
        w = 0,
        t = 0,
        C = 0,
        o = !0;
    z.origin.x < A.min.x ? (y = A.min.x - z.origin.x, y /= z.direction.x, o = !1, w = -1) : z.origin.x > A.max.x && (y = A.max.x - z.origin.x, y /= z.direction.x, o = !1, w = 1);
    z.origin.y < A.min.y ? (x = A.min.y - z.origin.y, x /= z.direction.y, o = !1, t = -1) : z.origin.y > A.max.y && (x = A.max.y - z.origin.y, x /= z.direction.y, o = !1, t = 1);
    z.origin.z < A.min.z ? (v = A.min.z - z.origin.z, v /= z.direction.z, o = !1, C = -1) : z.origin.z > A.max.z && (v = A.max.z - z.origin.z, v /= z.direction.z, o = !1, C = 1);
    if (o) {
        return -1
    }
    o = 0;
    x > y && (o = 1, y = x);
    v > y && (o = 2, y = v);
    switch (o) {
        case 0:
            t = z.origin.y + z.direction.y * y;
            if (t < A.min.y || t > A.max.y) {
                return Number.MAX_VALUE
            }
            z = z.origin.z + z.direction.z * y;
            if (z < A.min.z || z > A.max.z) {
                return Number.MAX_VALUE
            }
            A.normal.set(w, 0, 0);
            break;
        case 1:
            w = z.origin.x + z.direction.x * y;
            if (w < A.min.x || w > A.max.x) {
                return Number.MAX_VALUE
            }
            z = z.origin.z + z.direction.z * y;
            if (z < A.min.z || z > A.max.z) {
                return Number.MAX_VALUE
            }
            A.normal.set(0, t, 0);
            break;
        case 2:
            w = z.origin.x + z.direction.x * y;
            if (w < A.min.x || w > A.max.x) {
                return Number.MAX_VALUE
            }
            t = z.origin.y + z.direction.y * y;
            if (t < A.min.y || t > A.max.y) {
                return Number.MAX_VALUE
            }
            A.normal.set(0, 0, C)
    }
    return y
};
THREE.CollisionSystem.prototype.rayPlane = function (h, n) {
    var m = h.direction.dot(n.normal),
        k = n.point.dot(n.normal);
    if (m < 0) {
        m = (k - h.origin.dot(n.normal)) / m
    } else {
        return Number.MAX_VALUE
    }
    return m > 0 ? m : Number.MAX_VALUE
};
THREE.CollisionSystem.prototype.raySphere = function (h, n) {
    var m = n.center.clone().subSelf(h.origin);
    if (m.lengthSq < n.radiusSq) {
        return -1
    }
    var k = m.dot(h.direction.clone());
    if (k <= 0) {
        return Number.MAX_VALUE
    }
    m = n.radiusSq - (m.lengthSq() - k * k);
    if (m >= 0) {
        return Math.abs(k) - Math.sqrt(m)
    }
    return Number.MAX_VALUE
};
THREE.CollisionSystem.__v1 = new THREE.Vector3;
THREE.CollisionSystem.__v2 = new THREE.Vector3;
THREE.CollisionSystem.__v3 = new THREE.Vector3;
THREE.CollisionSystem.__nr = new THREE.Vector3;
THREE.CollisionSystem.__m = new THREE.Matrix4;
THREE.CollisionSystem.__r = new THREE.Ray;
THREE.CollisionUtils = {};
THREE.CollisionUtils.MeshOBB = function (f) {
    f.geometry.computeBoundingBox();
    var k = f.geometry.boundingBox,
        h = new THREE.Vector3(k.x[0], k.y[0], k.z[0]),
        k = new THREE.Vector3(k.x[1], k.y[1], k.z[1]),
        h = new THREE.BoxCollider(h, k);
    h.mesh = f;
    return h
};
THREE.CollisionUtils.MeshAABB = function (e) {
    var f = THREE.CollisionUtils.MeshOBB(e);
    f.min.addSelf(e.position);
    f.max.addSelf(e.position);
    f.dynamic = !1;
    return f
};
THREE.CollisionUtils.MeshColliderWBox = function (c) {
    return new THREE.MeshCollider(c, THREE.CollisionUtils.MeshOBB(c))
};
if (THREE.WebGLRenderer) {
    THREE.AnaglyphWebGLRenderer = function (H) {
        THREE.WebGLRenderer.call(this, H);
        var G = this,
            E = this.setSize,
            D = this.render,
            C = new THREE.Camera,
            A = new THREE.Camera,
            B = new THREE.Matrix4,
            y = new THREE.Matrix4,
            L, o, K;
        C.useTarget = A.useTarget = !1;
        C.matrixAutoUpdate = A.matrixAutoUpdate = !1;
        var H = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat
        }, M = new THREE.WebGLRenderTarget(512, 512, H),
            I = new THREE.WebGLRenderTarget(512, 512, H),
            J = new THREE.Camera(53, 1, 1, 10000);
        J.position.z = 2;
        _material = new THREE.MeshShaderMaterial({
            uniforms: {
                mapLeft: {
                    type: "t",
                    value: 0,
                    texture: M
                },
                mapRight: {
                    type: "t",
                    value: 1,
                    texture: I
                }
            },
            vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D mapLeft;\nuniform sampler2D mapRight;\nvarying vec2 vUv;\nvoid main() {\nvec4 colorL, colorR;\nvec2 uv = vUv;\ncolorL = texture2D( mapLeft, uv );\ncolorR = texture2D( mapRight, uv );\ngl_FragColor = vec4( colorL.g * 0.7 + colorL.b * 0.3, colorR.g, colorR.b, colorL.a + colorR.a ) * 1.1;\n}"
        });
        var F = new THREE.Scene;
        F.addObject(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), _material));
        this.setSize = function (c, e) {
            E.call(G, c, e);
            M.width = c;
            M.height = e;
            I.width = c;
            I.height = e
        };
        this.render = function (c, n) {
            n.update(null, !0);
            if (L !== n.aspect || o !== n.near || K !== n.fov) {
                L = n.aspect;
                o = n.near;
                K = n.fov;
                var m = n.projectionMatrix.clone(),
                    h = 125 / 30 * 0.5,
                    f = h * o / 125,
                    k = o * Math.tan(K * Math.PI / 360),
                    p;
                B.n14 = h;
                y.n14 = -h;
                h = -k * L + f;
                p = k * L + f;
                m.n11 = 2 * o / (p - h);
                m.n13 = (p + h) / (p - h);
                C.projectionMatrix = m.clone();
                h = -k * L - f;
                p = k * L - f;
                m.n11 = 2 * o / (p - h);
                m.n13 = (p + h) / (p - h);
                A.projectionMatrix = m.clone()
            }
            C.matrix = n.matrixWorld.clone().multiplySelf(y);
            C.update(null, !0);
            C.position.copy(n.position);
            C.near = o;
            C.far = n.far;
            D.call(G, c, C, M, !0);
            A.matrix = n.matrixWorld.clone().multiplySelf(B);
            A.update(null, !0);
            A.position.copy(n.position);
            A.near = o;
            A.far = n.far;
            D.call(G, c, A, I, !0);
            D.call(G, F, J)
        }
    }
}
if (THREE.WebGLRenderer) {
    THREE.CrosseyedWebGLRenderer = function (p) {
        THREE.WebGLRenderer.call(this, p);
        this.autoClear = !1;
        var y = this,
            w = this.setSize,
            v = this.render,
            u, o, t = new THREE.Camera,
            x = new THREE.Camera;
        y.separation = 10;
        if (p && p.separation !== void 0) {
            y.separation = p.separation
        }(new THREE.Camera(53, window.innerWidth / 2 / window.innerHeight, 1, 10000)).position.z = -10;
        this.setSize = function (c, e) {
            w.call(y, c, e);
            u = c / 2;
            o = e
        };
        this.render = function (c, f) {
            this.clear();
            t.fov = f.fov;
            t.aspect = 0.5 * f.aspect;
            t.near = f.near;
            t.far = f.far;
            t.updateProjectionMatrix();
            t.position.copy(f.position);
            t.target.position.copy(f.target.position);
            t.translateX(y.separation);
            x.projectionMatrix = t.projectionMatrix;
            x.position.copy(f.position);
            x.target.position.copy(f.target.position);
            x.translateX(-y.separation);
            this.setViewport(0, 0, u, o);
            v.call(y, c, t);
            this.setViewport(u, 0, u, o);
            v.call(y, c, x, !1)
        }
    }
}
THREE.ObjectSelection = function (e) {
    var e = e || {};
    this.domElement = e.domElement || document;
    this.projector = new THREE.Projector;
    this.INTERSECTED;
    var f = e.selected;
    var b = {
        x: 0,
        y: 0
    };
    this.domElement.addEventListener("mousemove", c, false);

    function c(h) {
        b.x = (h.clientX / window.innerWidth) * 2 - 1;
        b.y = -(h.clientY / window.innerHeight) * 2 + 1
    }
    this.render = function (o, m) {
        m.update();
        var k = new THREE.Vector3(b.x, b.y, 0.5);
        this.projector.unprojectVector(k, m);
        var h = new THREE.Ray(m.position, k.subSelf(m.position).normalize());
        var n = h.intersectScene(o);
        if (n.length > 0) {
            if (this.INTERSECTED != n[0].object) {
                if (this.INTERSECTED) {
                    this.INTERSECTED.materials[0].color.setHex(this.INTERSECTED.currentHex)
                }
                this.INTERSECTED = n[0].object;
                this.INTERSECTED.currentHex = this.INTERSECTED.materials[0].color.getHex();
                this.INTERSECTED.materials[0].color.setHex(16711680);
                f(this.INTERSECTED)
            }
        } else {
            if (this.INTERSECTED) {
                this.INTERSECTED.materials[0].color.setHex(this.INTERSECTED.currentHex)
            }
            this.INTERSECTED = null;
            f(this.INTERSECTED)
        }
    }
}
/* ! stats.js r5 - http://github.com/mrdoob/stats.js */;
var Stats = function () {
    function O(k, b, o) {
        var e, h, m;
        for (h = 0; h < 30; h++) {
            for (e = 0; e < 73; e++) {
                m = (e + h * 74) * 4;
                k[m] = k[m + 4];
                k[m + 1] = k[m + 5];
                k[m + 2] = k[m + 6]
            }
        }
        for (h = 0; h < 30; h++) {
            m = (73 + h * 74) * 4;
            if (h < b) {
                k[m] = al[o].bg.r;
                k[m + 1] = al[o].bg.g;
                k[m + 2] = al[o].bg.b
            } else {
                k[m] = al[o].fg.r;
                k[m + 1] = al[o].fg.g;
                k[m + 2] = al[o].fg.b
            }
        }
    }
    var Q = 0,
        M = 2,
        ak, u = 0,
        ae = (new Date).getTime(),
        n = ae,
        f = ae,
        ac = 0,
        aa = 1000,
        Y = 0,
        ad, aj, am, ab, X, Z = 0,
        V = 1000,
        T = 0,
        ai, ah, W, R, U = 0,
        P = 1000,
        N = 0,
        ag, af, S, K, al = {
            fps: {
                bg: {
                    r: 16,
                    g: 16,
                    b: 48
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 255
                }
            },
            ms: {
                bg: {
                    r: 16,
                    g: 48,
                    b: 16
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 0
                }
            },
            mem: {
                bg: {
                    r: 48,
                    g: 16,
                    b: 26
                },
                fg: {
                    r: 255,
                    g: 0,
                    b: 128
                }
            }
        };
    ak = document.createElement("div");
    ak.style.cursor = "pointer";
    ak.style.width = "80px";
    ak.style.opacity = "0.9";
    ak.style.zIndex = "10001";
    ak.addEventListener("click", function () {
        Q++;
        Q == M && (Q = 0);
        ad.style.display = "none";
        ai.style.display = "none";
        ag.style.display = "none";
        switch (Q) {
            case 0:
                ad.style.display = "block";
                break;
            case 1:
                ai.style.display = "block";
                break;
            case 2:
                ag.style.display = "block"
        }
    }, false);
    ad = document.createElement("div");
    ad.style.backgroundColor = "rgb(" + Math.floor(al.fps.bg.r / 2) + "," + Math.floor(al.fps.bg.g / 2) + "," + Math.floor(al.fps.bg.b / 2) + ")";
    ad.style.padding = "2px 0px 3px 0px";
    ak.appendChild(ad);
    aj = document.createElement("div");
    aj.style.fontFamily = "Helvetica, Arial, sans-serif";
    aj.style.textAlign = "left";
    aj.style.fontSize = "9px";
    aj.style.color = "rgb(" + al.fps.fg.r + "," + al.fps.fg.g + "," + al.fps.fg.b + ")";
    aj.style.margin = "0px 0px 1px 3px";
    aj.innerHTML = '<span style="font-weight:bold">FPS</span>';
    ad.appendChild(aj);
    am = document.createElement("canvas");
    am.width = 74;
    am.height = 30;
    am.style.display = "block";
    am.style.marginLeft = "3px";
    ad.appendChild(am);
    ab = am.getContext("2d");
    ab.fillStyle = "rgb(" + al.fps.bg.r + "," + al.fps.bg.g + "," + al.fps.bg.b + ")";
    ab.fillRect(0, 0, am.width, am.height);
    X = ab.getImageData(0, 0, am.width, am.height);
    ai = document.createElement("div");
    ai.style.backgroundColor = "rgb(" + Math.floor(al.ms.bg.r / 2) + "," + Math.floor(al.ms.bg.g / 2) + "," + Math.floor(al.ms.bg.b / 2) + ")";
    ai.style.padding = "2px 0px 3px 0px";
    ai.style.display = "none";
    ak.appendChild(ai);
    ah = document.createElement("div");
    ah.style.fontFamily = "Helvetica, Arial, sans-serif";
    ah.style.textAlign = "left";
    ah.style.fontSize = "9px";
    ah.style.color = "rgb(" + al.ms.fg.r + "," + al.ms.fg.g + "," + al.ms.fg.b + ")";
    ah.style.margin = "0px 0px 1px 3px";
    ah.innerHTML = '<span style="font-weight:bold">MS</span>';
    ai.appendChild(ah);
    am = document.createElement("canvas");
    am.width = 74;
    am.height = 30;
    am.style.display = "block";
    am.style.marginLeft = "3px";
    ai.appendChild(am);
    W = am.getContext("2d");
    W.fillStyle = "rgb(" + al.ms.bg.r + "," + al.ms.bg.g + "," + al.ms.bg.b + ")";
    W.fillRect(0, 0, am.width, am.height);
    R = W.getImageData(0, 0, am.width, am.height);
    try {
        if (performance && performance.memory && performance.memory.totalJSHeapSize) {
            M = 3
        }
    } catch (c) {}
    ag = document.createElement("div");
    ag.style.backgroundColor = "rgb(" + Math.floor(al.mem.bg.r / 2) + "," + Math.floor(al.mem.bg.g / 2) + "," + Math.floor(al.mem.bg.b / 2) + ")";
    ag.style.padding = "2px 0px 3px 0px";
    ag.style.display = "none";
    ak.appendChild(ag);
    af = document.createElement("div");
    af.style.fontFamily = "Helvetica, Arial, sans-serif";
    af.style.textAlign = "left";
    af.style.fontSize = "9px";
    af.style.color = "rgb(" + al.mem.fg.r + "," + al.mem.fg.g + "," + al.mem.fg.b + ")";
    af.style.margin = "0px 0px 1px 3px";
    af.innerHTML = '<span style="font-weight:bold">MEM</span>';
    ag.appendChild(af);
    am = document.createElement("canvas");
    am.width = 74;
    am.height = 30;
    am.style.display = "block";
    am.style.marginLeft = "3px";
    ag.appendChild(am);
    S = am.getContext("2d");
    S.fillStyle = "#301010";
    S.fillRect(0, 0, am.width, am.height);
    K = S.getImageData(0, 0, am.width, am.height);
    return {
        domElement: ak,
        update: function () {
            u++;
            ae = (new Date).getTime();
            Z = ae - n;
            V = Math.min(V, Z);
            T = Math.max(T, Z);
            O(R.data, Math.min(30, 30 - Z / 200 * 30), "ms");
            ah.innerHTML = '<span style="font-weight:bold">' + Z + " MS</span> (" + V + "-" + T + ")";
            W.putImageData(R, 0, 0);
            n = ae;
            if (ae > f + 1000) {
                ac = Math.round(u * 1000 / (ae - f));
                aa = Math.min(aa, ac);
                Y = Math.max(Y, ac);
                O(X.data, Math.min(30, 30 - ac / 100 * 30), "fps");
                aj.innerHTML = '<span style="font-weight:bold">' + ac + " FPS</span> (" + aa + "-" + Y + ")";
                ab.putImageData(X, 0, 0);
                if (M == 3) {
                    U = performance.memory.usedJSHeapSize * 9.54e-7;
                    P = Math.min(P, U);
                    N = Math.max(N, U);
                    O(K.data, Math.min(30, 30 - U / 2), "mem");
                    af.innerHTML = '<span style="font-weight:bold">' + Math.round(U) + " MEM</span> (" + Math.round(P) + "-" + Math.round(N) + ")";
                    S.putImageData(K, 0, 0)
                }
                f = ae;
                u = 0
            }
        }
    }
};
/*
 * ! Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function () {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (c, b) {
            window.setTimeout(c, 1000 / 60)
        }
    })()
}
var THREEJS = THREEJS || {};
THREEJS.Interaction = function (x, c) {
    var n = 0,
        m = 0,
        D = 0,
        B = 0,
        y = 0,
        h = 0,
        e = 0,
        A = 0,
        C = 0,
        z = false,
        t = window.innerWidth / 2,
        p = window.innerHeight / 2,
        v = false,
        w = false;
    var x = x;
    this.element = c || document;
    this.element.addEventListener("mousedown", k, false);
    this.element.addEventListener("mousemove", u, false);
    this.element.addEventListener("mouseup", f, false);
    this.element.addEventListener("mousewheel", o, false);
    this.element.addEventListener("DOMMouseScroll", o, false);
    this.element.addEventListener("mousewheel", o, false);

    function k(E) {
        E.preventDefault();
        if (E.button == 2) {
            y = 40
        }
        if (E.button == 0) {
            w = true;
            z = true
        }
    }
    function u(E) {
        E.preventDefault();
        if (w) {
            v = true
        }
        if (z) {
            D = E.clientX;
            B = E.clientY;
            y = 0;
            h = 0;
            A = E.clientX;
            C = E.clientY;
            z = false
        }
        if (v && w && E.shiftKey) {
            D = E.clientX;
            B = E.clientY;
            h = (B - C);
            e = (D - A);
            A = D;
            C = B
        } else {
            if (v && w) {
                D = E.clientX;
                B = E.clientY;
                y = (D - A);
                h = (B - C);
                A = D;
                C = B
            }
        }
    }
    function f(E) {
        E.preventDefault();
        if (E.button == 0) {
            w = false
        }
    }
    function o(E) {
        E.preventDefault();
        var F = 0;
        if (E.wheelDelta) {
            F = E.wheelDelta / 120
        } else {
            if (E.detail) {
                F = -E.detail / 3
            }
        }
        if (E.shiftKey) {
            x.rotation.x += F * 0.2
        } else {
            x.position.z -= F * 1000
        }
    }
    function b(E) {
        distanceTarget -= E;
        distanceTarget = distanceTarget > 1000 ? 1000 : distanceTarget;
        distanceTarget = distanceTarget < 350 ? 350 : distanceTarget
    }
    this.update = function () {
        var E = x.position.z / 1000;
        x.position.x -= (y * 2) * (E);
        x.position.y += (h * 2) * (E);
        x.rotation.y = (e / 20);
        if (y > -0.5 && y < 0.5) {
            y = 0
        }
        if (h > -0.5 && h < 0.5) {
            h = 0
        }
        y *= 0.9;
        h *= 0.9
    }
};

function Graph(b) {
    this.options = b || {};
    this.nodeSet = {};
    this.nodes = [];
    this.edges = [];
    this.layout
}
Graph.prototype.addNode = function (b) {
    if (this.nodeSet[b.id] == undefined && !this.reached_limit()) {
        this.nodeSet[b.id] = b;
        this.nodes.push(b);
        return true
    }
    return false
};
Graph.prototype.getNode = function (b) {
    return this.nodeSet[b]
};
Graph.prototype.addEdge = function (c, e) {
    if (c.addConnectedTo(e) === true) {
        var b = new Edge(c, e);
        this.edges.push(b);
        return true
    }
    return false
};
Graph.prototype.reached_limit = function () {
    if (this.options.limit != undefined) {
        return this.options.limit <= this.nodes.length
    } else {
        return false
    }
};

function Node(b) {
    this.id = b;
    this.nodesTo = [];
    this.nodesFrom = [];
    this.position = {};
    this.data = {}
}
Node.prototype.addConnectedTo = function (b) {
    if (this.connectedTo(b) === false) {
        this.nodesTo.push(b);
        return true
    }
    return false
};
Node.prototype.connectedTo = function (e) {
    for (var b = 0; b < this.nodesTo.length; b++) {
        var c = this.nodesTo[b];
        if (c.id == e.id) {
            return true
        }
    }
    return false
};

function Edge(b, c) {
    this.source = b;
    this.target = c;
    this.data = {}
}
var Layout = Layout || {};
Layout.ForceDirected = function (u, v) {
    var v = v || {};
    this.layout = v.layout || "2d";
    this.attraction_multiplier = v.attraction || 5;
    this.repulsion_multiplier = v.repulsion || 0.75;
    this.max_iterations = v.iterations || 1000;
    this.graph = u;
    this.width = v.width || 200;
    this.height = v.height || 200;
    this.finished = false;
    var m = v.positionUpdated;
    var e = 0.000001;
    var n;
    var t;
    var h;
    var p = 0;
    var o = 0;
    var b;
    var f;
    var k = this;
    var c = 0;
    this.init = function () {
        this.finished = false;
        o = this.width / 10;
        b = this.graph.nodes.length;
        f = this.graph.edges.length;
        h = Math.sqrt(this.height * this.width / b);
        n = this.attraction_multiplier * h;
        t = this.repulsion_multiplier * h
    };
    this.generate = function () {
        if (p < this.max_iterations && o > 0.000001) {
            var x = new Date().getTime();
            for (var H = 0; H < b; H++) {
                var J = u.nodes[H];
                J.layout = J.layout || {};
                if (H == 0) {
                    J.layout.offset_x = 0;
                    J.layout.offset_y = 0;
                    if (this.layout === "3d") {
                        J.layout.offset_z = 0
                    }
                }
                J.layout.force = 0;
                J.layout.tmp_pos_x = J.layout.tmp_pos_x || J.position.x;
                J.layout.tmp_pos_y = J.layout.tmp_pos_y || J.position.y;
                if (this.layout === "3d") {
                    J.layout.tmp_pos_z = J.layout.tmp_pos_z || J.position.z
                }
                for (var G = H + 1; G < b; G++) {
                    var K = u.nodes[G];
                    if (H != G) {
                        K.layout = K.layout || {};
                        K.layout.tmp_pos_x = K.layout.tmp_pos_x || K.position.x;
                        K.layout.tmp_pos_y = K.layout.tmp_pos_y || K.position.y;
                        if (this.layout === "3d") {
                            K.layout.tmp_pos_z = K.layout.tmp_pos_z || K.position.z
                        }
                        var F = J.layout.tmp_pos_x - K.layout.tmp_pos_x;
                        var D = J.layout.tmp_pos_y - K.layout.tmp_pos_y;
                        if (this.layout === "3d") {
                            var B = J.layout.tmp_pos_z - K.layout.tmp_pos_z
                        }
                        var L = Math.max(e, Math.sqrt((F * F) + (D * D)));
                        if (this.layout === "3d") {
                            var C = Math.max(e, Math.sqrt((B * B) + (D * D)))
                        }
                        var w = (t * t) / L;
                        if (this.layout === "3d") {
                            var z = (t * t) / C
                        }
                        J.layout.force += w;
                        K.layout.force += w;
                        J.layout.offset_x += (F / L) * w;
                        J.layout.offset_y += (D / L) * w;
                        if (H == 0) {
                            K.layout.offset_x = 0;
                            K.layout.offset_y = 0;
                            if (this.layout === "3d") {
                                K.layout.offset_z = 0
                            }
                        }
                        K.layout.offset_x -= (F / L) * w;
                        K.layout.offset_y -= (D / L) * w;
                        if (this.layout === "3d") {
                            J.layout.offset_z += (B / C) * z;
                            K.layout.offset_z -= (B / C) * z
                        }
                    }
                }
            }
            for (var H = 0; H < f; H++) {
                var y = u.edges[H];
                var F = y.source.layout.tmp_pos_x - y.target.layout.tmp_pos_x;
                var D = y.source.layout.tmp_pos_y - y.target.layout.tmp_pos_y;
                if (this.layout === "3d") {
                    var B = y.source.layout.tmp_pos_z - y.target.layout.tmp_pos_z
                }
                var L = Math.max(e, Math.sqrt((F * F) + (D * D)));
                if (this.layout === "3d") {
                    var C = Math.max(e, Math.sqrt((B * B) + (D * D)))
                }
                var w = (L * L) / n;
                if (this.layout === "3d") {
                    var z = (C * C) / n
                }
                y.source.layout.force -= w;
                y.target.layout.force += w;
                y.source.layout.offset_x -= (F / L) * w;
                y.source.layout.offset_y -= (D / L) * w;
                if (this.layout === "3d") {
                    y.source.layout.offset_z -= (B / C) * z
                }
                y.target.layout.offset_x += (F / L) * w;
                y.target.layout.offset_y += (D / L) * w;
                if (this.layout === "3d") {
                    y.target.layout.offset_z += (B / C) * z
                }
            }
            for (var H = 0; H < b; H++) {
                var A = u.nodes[H];
                var L = Math.max(e, Math.sqrt(A.layout.offset_x * A.layout.offset_x + A.layout.offset_y * A.layout.offset_y));
                if (this.layout === "3d") {
                    var C = Math.max(e, Math.sqrt(A.layout.offset_z * A.layout.offset_z + A.layout.offset_y * A.layout.offset_y))
                }
                A.layout.tmp_pos_x += (A.layout.offset_x / L) * Math.min(L, o);
                A.layout.tmp_pos_y += (A.layout.offset_y / L) * Math.min(L, o);
                if (this.layout === "3d") {
                    A.layout.tmp_pos_z += (A.layout.offset_z / C) * Math.min(C, o)
                }
                var I = true;
                A.position.x -= (A.position.x - A.layout.tmp_pos_x) / 10;
                A.position.y -= (A.position.y - A.layout.tmp_pos_y) / 10;
                if (this.layout === "3d") {
                    A.position.z -= (A.position.z - A.layout.tmp_pos_z) / 10
                }
                if (I && typeof m === "function") {
                    m(A)
                }
            }
            var E = new Date().getTime();
            c += E - x;
            o *= (1 - (p / this.max_iterations));
            p++
        } else {
            if (!this.finished) {
                console.log("Average time: " + (c / p) + " ms")
            }
            this.finished = true;
            return false
        }
        return true
    };
    this.stop_calculating = function () {
        p = this.max_iterations
    }
};
var Drawing = Drawing || {};
Drawing.SimpleGraph = function (f, data)
{
    var f = f || {};
    this.layout = f.layout || "2d";
    this.layout_options = f.graphLayout || {};
    this.show_stats = f.showStats || false;
    this.show_info = f.showInfo || false;
    this.selection = f.selection || false;
    this.limit = f.limit || 10;
    this.nodes_count = f.numNodes || 20;
    this.edges_count = f.numEdges || 10;
    var z, A, w, m, h, B;
    var C;
    var v = {};
    var c = new Graph({
        limit: f.limit
    });
    var t = [];
    var o = this;
    x();
    p();
    k();

    function x() {
        w = new THREE.WebGLRenderer({
            antialias: true
        });
        w.setSize(window.innerWidth, window.innerHeight);
        z = new THREE.TrackballCamera({
            fov: 40,
            aspect: window.innerWidth / window.innerHeight,
            near: 1,
            far: 1000000,
            rotateSpeed: 0.5,
            zoomSpeed: 5.2,
            panSpeed: 1,
            noZoom: false,
            noPan: false,
            staticMoving: false,
            dynamicDampingFactor: 0.3,
            domElement: w.domElement,
            keys: [65, 83, 68]
        });
        z.position.z = 5000;
        A = new THREE.Scene();
        if (o.layout === "3d") {
            h = new THREE.SphereGeometry(50, 50, 50)
        } else {
            h = new THREE.SphereGeometry(50, 50, 0)
        }
        if (o.selection) {
            B = new THREE.ObjectSelection({
                domElement: w.domElement,
                selected: function (G) {
                    if (G != null) {
                        v.select = "Object " + G.id
                    } else {
                        delete v.select
                    }
                }
            })
        }
        document.body.appendChild(w.domElement);
        if (o.show_stats) {
            C = new Stats();
            C.domElement.style.position = "absolute";
            C.domElement.style.top = "0px";
            document.body.appendChild(C.domElement)
        }
        if (o.show_info) {
            var E = document.createElement("div");
            var F = document.createAttribute("id");
            F.nodeValue = "graph-info";
            E.setAttributeNode(F);
            document.body.appendChild(E)
        }
    }

    // REM: This is where the nodes are being added to the graph.
    function p() {
        //var I = new Node(0);
        //c.addNode(I);
        //y(I);
        //var F = [];
        //F.push(I);
        var E = 0;

//        while (F.length != 0 && E < o.nodes_count) {
//            var I = F.shift();
//            var H = b(1, o.edges_count);
//            for (var G = 1; G <= H; G++) {
//                var J = new Node(G * E);
//                if (c.addNode(J)) {
//                    y(J);
//                    F.push(J);
//                    if (c.addEdge(I, J)) {
//                        n(I, J)
//                    }
//                }
//            }
//            E++
//        }

//        var J = new Node(1);
//        y(J);
//        c.addNode(J);
//        c.addEdge(I, J);
//        n(I,J);

        // Iterate over the data
        var curNode = 0;
        var nodes = {};
        
        // First row is the header
        for (var i=1; i<data.length; i++)
        {
          //console.log("Data[" + i + "]");
          for (var j=0; j<data[i].length; j++)
          {
        	// New node
        	//console.log("Adding NODE=" + data[i][j]);
            if (!(data[i][j] in nodes))
            {
              console.log("NEW NODE:" + data[i][j])
              curNode++;
              nodes[data[i][j]] = new Node(curNode);
              y(nodes[data[i][j]]);
              c.addNode(nodes[data[i][j]]);
              console.log("added node: " + curNode);
            }
          }

          // Add connections:
          for (var j=1; j<data[i].length; j++)
          {
            if (c.addEdge(nodes[data[i][j-1]], nodes[data[i][j]]))
            {
              n(nodes[data[i][j-1]], nodes[data[i][j]]);
            }
          }
        }
        
        //E = curNode;
        
        o.layout_options.width = o.layout_options.width || 2000;
        o.layout_options.height = o.layout_options.height || 2000;
        o.layout_options.iterations = o.layout_options.iterations || 100000;
        o.layout_options.layout = o.layout_options.layout || o.layout;
        c.layout = new Layout.ForceDirected(c, o.layout_options);
        c.layout.init();
        v.nodes = "Nodes " + c.nodes.length;
        v.edges = "Edges " + c.edges.length
    }
    function y(G) {
        var E = new THREE.Mesh(h, [new THREE.MeshBasicMaterial({
            color: Math.random() * 16777215,
            opacity: 0.5
        })]);
        var F = 5000;
        E.position.x = Math.floor(Math.random() * (F + F + 1) - F);
        E.position.y = Math.floor(Math.random() * (F + F + 1) - F);
        if (o.layout === "3d") {
            E.position.z = Math.floor(Math.random() * (F + F + 1) - F)
        }
        E.id = G.id;
        G.data.draw_object = E;
        G.position = E.position;
        A.addObject(G.data.draw_object)
    }
    function n(F, G) {
        material = new THREE.LineBasicMaterial({
            color: 16711680,
            opacity: 1,
            linewidth: 0.5
        });
        var E = new THREE.Geometry();
        E.vertices.push(new THREE.Vertex(F.data.draw_object.position));
        E.vertices.push(new THREE.Vertex(G.data.draw_object.position));
        line = new THREE.Line(E, material, THREE.LinePieces);
        line.scale.x = line.scale.y = line.scale.z = 1;
        line.originalScale = 1;
        t.push(E);
        A.addObject(line)
    }
    function k() {
        requestAnimationFrame(k);
        D();
        if (o.show_info) {
            e()
        }
    }
    function D() {
        if (!c.layout.finished) {
            v.calc = "<span style='color: red'>Calculating layout...</span>";
            c.layout.generate()
        } else {
            v.calc = ""
        }
        for (var E = 0; E < t.length; E++) {
            t[E].__dirtyVertices = true
        }
        if (o.selection) {
            B.render(A, z)
        }
        if (o.show_stats) {
            C.update()
        }
        w.render(A, z)
    }
    function e(G) {
        var F = "";
        for (var E in v) {
            if (F != "" && v[E] != "") {
                F += " - "
            }
            F += v[E]
        }
        document.getElementById("graph-info").innerHTML = F
    }
    function u(F, H) {
        F.materials[0].map.image = null;
        var E = document.createElement("canvas");
        var G = E.getContext("2d");
        G.font = "50pt arial bold";
        G.fillText(H, 10, 64);
        F.materials[0].map.image = E
    }
    function b(F, E) {
        return Math.floor(Math.random() * (E - F + 1) + F)
    }
    this.stop_calculating = function () {
        c.layout.stop_calculating()
    }
};
var Drawing = Drawing || {};
Drawing.SphereGraph = function (f) {
    var f = f || {};
    this.layout = f.layout || "2d";
    this.show_stats = f.showStats || false;
    this.show_info = f.showInfo || false;
    this.selection = f.selection || false;
    this.limit = f.limit || 10;
    this.nodes_count = f.numNodes || 20;
    this.edges_count = f.numEdges || 10;
    var F, G, C, p, n, H;
    var I;
    var B = {};
    var c = new Graph({
        limit: f.limit
    });
    var x = [];
    var o = 4900;
    var z = o;
    var k = -o;
    var y = o;
    var h = -o;
    var u = this;
    E();
    w();
    m();

    function E() {
        C = new THREE.WebGLRenderer({
            antialias: true
        });
        C.setSize(window.innerWidth, window.innerHeight);
        F = new THREE.TrackballCamera({
            fov: 35,
            aspect: window.innerWidth / window.innerHeight,
            near: 1,
            far: 100000,
            rotateSpeed: 0.5,
            zoomSpeed: 5.2,
            panSpeed: 1,
            noZoom: false,
            noPan: false,
            staticMoving: false,
            dynamicDampingFactor: 0.3,
            domElement: C.domElement,
            keys: [65, 83, 68]
        });
        F.position.z = 10000;
        G = new THREE.Scene();
        var K = new THREE.SphereGeometry(o, 110, 100);
        material = new THREE.MeshBasicMaterial({
            color: 0,
            opacity: 0.8
        });
        mesh = new THREE.Mesh(K, material);
        G.addObject(mesh);
        n = new THREE.SphereGeometry(25, 25, 0);
        if (u.selection) {
            H = new THREE.ObjectSelection({
                domElement: C.domElement,
                selected: function (N) {
                    if (N != null) {
                        B.select = "Object " + N.id
                    } else {
                        delete B.select
                    }
                }
            })
        }
        document.body.appendChild(C.domElement);
        if (u.show_stats) {
            I = new Stats();
            I.domElement.style.position = "absolute";
            I.domElement.style.top = "0px";
            document.body.appendChild(I.domElement)
        }
        if (u.show_info) {
            var L = document.createElement("div");
            var M = document.createAttribute("id");
            M.nodeValue = "graph-info";
            L.setAttributeNode(M);
            document.body.appendChild(L)
        }
    }
    function w() {
        var O = new Node(0);
        c.addNode(O);
        D(O);
        var L = [];
        L.push(O);
        var K = 1;
        while (L.length != 0 && K < u.nodes_count) {
            var O = L.shift();
            var N = b(1, u.edges_count);
            for (var M = 1; M <= N; M++) {
                var P = new Node(M * K);
                if (c.addNode(P)) {
                    D(P);
                    L.push(P);
                    if (c.addEdge(O, P)) {
                        t(O, P)
                    }
                }
            }
            K++
        }
        c.layout = new Layout.ForceDirected(c, {
            width: 2000,
            height: 2000,
            iterations: 1000,
            positionUpdated: function (U) {
                z = Math.max(z, U.position.x);
                k = Math.min(k, U.position.x);
                y = Math.max(y, U.position.y);
                h = Math.min(h, U.position.y);
                var V, Q;
                if (U.position.x < 0) {
                    V = (-90 / k) * U.position.x
                } else {
                    V = (90 / z) * U.position.x
                }
                if (U.position.y < 0) {
                    Q = (-180 / h) * U.position.y
                } else {
                    Q = (180 / y) * U.position.y
                }
                var T = 5000;
                var S = (90 - V) * Math.PI / 180;
                var R = (180 - Q) * Math.PI / 180;
                U.data.draw_object.position.x = T * Math.sin(S) * Math.cos(R);
                U.data.draw_object.position.y = T * Math.cos(S);
                U.data.draw_object.position.z = T * Math.sin(S) * Math.sin(R)
            }
        });
        c.layout.init();
        B.nodes = "Nodes " + c.nodes.length;
        B.edges = "Edges " + c.edges.length
    }
    function D(M) {
        var K = new THREE.Mesh(n, [new THREE.MeshBasicMaterial({
            color: Math.random() * 16777215
        })]);
        var L = 2000;
        K.position.x = Math.floor(Math.random() * (L + L + 1) - L);
        K.position.y = Math.floor(Math.random() * (L + L + 1) - L);
        M.position.x = Math.floor(Math.random() * (L + L + 1) - L);
        M.position.y = Math.floor(Math.random() * (L + L + 1) - L);
        K.id = M.id;
        M.data.draw_object = K;
        M.layout = {};
        M.layout.max_X = 90;
        M.layout.min_X = -90;
        M.layout.max_Y = 180;
        M.layout.min_Y = -180;
        G.addObject(M.data.draw_object)
    }
    function t(L, M) {
        material = new THREE.LineBasicMaterial({
            color: 13421772,
            opacity: 0.5,
            linewidth: 0.5
        });
        var K = new THREE.Geometry();
        K.vertices.push(new THREE.Vertex(L.data.draw_object.position));
        K.vertices.push(new THREE.Vertex(M.data.draw_object.position));
        line = new THREE.Line(K, material, THREE.LinePieces);
        line.scale.x = line.scale.y = line.scale.z = 1;
        line.originalScale = 1;
        line.geometry.__dirtyVertices = true;
        x.push(K);
        G.addObject(line)
    }
    function m() {
        requestAnimationFrame(m);
        J();
        if (u.show_info) {
            e()
        }
    }
    function J() {
        if (!c.layout.finished) {
            B.calc = "<span style='color: red'>Calculating layout...</span>";
            c.layout.generate()
        } else {
            B.calc = ""
        }
        for (var K = 0; K < x.length; K++) {
            x[K].__dirtyVertices = true
        }
        for (var K = 0; K < c.nodes.length; K++) {
            c.nodes[K].data.draw_object.lookAt(F.position)
        }
        if (u.selection) {
            H.render(G, F)
        }
        if (u.show_stats) {
            I.update()
        }
        C.render(G, F)
    }
    function v() {
        if (transformed) {
            return
        }
        for (var M = 0; M < c.nodes.length; M++) {
            var P = c.nodes[M];
            var Q, K;
            if (P.position.x < 0) {
                Q = (-90 / k) * P.position.x
            } else {
                Q = (90 / z) * P.position.x
            }
            if (P.position.y < 0) {
                K = (-180 / h) * P.position.y
            } else {
                K = (180 / y) * P.position.y
            }
            var O = 5000;
            var N = (90 - Q) * Math.PI / 180;
            var L = (180 - K) * Math.PI / 180;
            P.data.draw_object.position.x = O * Math.sin(N) * Math.cos(L);
            P.data.draw_object.position.y = O * Math.cos(N);
            P.data.draw_object.position.z = O * Math.sin(N) * Math.sin(L)
        }
        transformed = true
    }
    function e(M) {
        var L = "";
        for (var K in B) {
            if (L != "" && B[K] != "") {
                L += " - "
            }
            L += B[K]
        }
        document.getElementById("graph-info").innerHTML = L
    }
    function A(L, N) {
        L.materials[0].map.image = null;
        var K = document.createElement("canvas");
        var M = K.getContext("2d");
        M.font = "50pt arial bold";
        M.fillText(N, 10, 64);
        L.materials[0].map.image = K
    }
    function b(L, K) {
        return Math.floor(Math.random() * (K - L + 1) + L)
    }
    this.stop_calculating = function () {
        c.layout.stop_calculating()
    }
};
