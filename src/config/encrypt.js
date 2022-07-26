const encryptascii = (str) => {
  let key = 'b3r4sput1h'

  let dataKey = {}
  for (let i = 0; i < key.length; i++) {
    dataKey[i] = key.substr(`${i}`, 1)
  }

  let strEnc = ''
  let nkey = 0
  let jml = str.length

  for (let i = 0; i < parseInt(jml); i++) {
    strEnc = strEnc + hexEncode(str[i].charCodeAt(0) + dataKey[nkey].charCodeAt(0))

    if (nkey === Object.keys(dataKey).length - 1) {
      nkey = 0
    }
    nkey = nkey + 1
  }
  return strEnc.toUpperCase()
}

const decryptascii = (str) => {
  if (str !== null) {
    let key = 'b3r4sput1h'
    let dataKey = {}
    for (let i = 0; i < key.length; i++) {
      dataKey[i] = key.substr(`${i}`, 1)
    }

    let strDec = ''
    let nkey = 0
    let jml = str.length
    let i = 0
    while (i < parseInt(jml)) {
      strDec = strDec + chr(hexdec(str.substr(i, 2)) - dataKey[nkey].charCodeAt(0))
      if (nkey === Object.keys(dataKey).length - 1) {
        nkey = 0
      }
      nkey = nkey + 1
      i = i + 2
    }
    return strDec
  }
}
const hexEncode = (str) => {
  var result = ''
  result = str.toString(16)
  return result
}

const hexdec = (hex) => {
  var str = ''
  str = parseInt(hex, 16)
  return str
}
const chr = (asci) => {
  var str = ''
  str = String.fromCharCode(asci)
  return str
}

function doEncrypt(data, ignore = []) {
  if (typeof data === 'object') {
    // eslint-disable-next-line
    Object.keys(data).map((x) => {
      const result = ignore.find((find) => find === x)
      if (!result) {
        if (Array.isArray(data[x])) {
          // eslint-disable-next-line
          data[x].map((y, i) => {
            if (typeof y === 'string') {
              data[x][i] = encryptascii(y)
            } else {
              doEncrypt(y, ignore)
            }
          })
        } else {
          if (typeof data[x] === 'string') {
            // console.log(data[x]);
            data[x] = encryptascii(data[x])
          } else if (typeof data[x] === 'number') {
            data[x] = maskingFunction(data[x])
          }
        }
      }
    })
  } else {
    if (typeof data === 'string') {
      // console.log(data);
      data = encryptascii(data)
    }
  }
  return data
}

function doDecrypt(data, ignore = []) {
  if (typeof data === 'object') {
    // eslint-disable-next-line
    Object.keys(data).map((x) => {
      const result = ignore.find((find) => find === x)
      if (!result) {
        if (Array.isArray(data[x])) {
          // eslint-disable-next-line
          data[x].map((y, i) => {
            if (typeof y === 'string') {
              data[x][i] = decryptascii(y)
            } else {
              doDecrypt(y, ignore)
            }
          })
        } else {
          if (typeof data[x] === 'string') {
            // console.log(data[x]);
            data[x] = decryptascii(data[x])
          } else if (typeof data[x] === 'number') {
            data[x] = unMaskingFunction(data[x])
          }
        }
      }
    })
  } else {
    if (typeof data === 'string') {
      // console.log(data);
      data = decryptascii(data)
    } else if (typeof data === 'number') {
      data = unMaskingFunction(data)
    }
  }
  return data
}

function maskingFunction(number) {
  const numberString = String(number)
  const list = numberString.split('')
  return Number(
    list
    .map((data) => {
      if (data === '.') {
        return '.'
      } else {
        // console.log(data);
        return String(Number(data) + 22)
      }
    })
    .join('') + '1'
  )
}

function unMaskingFunction(number) {
  const numberString = String(number).slice(0, String(number).length - 1)
  // console.log(numberString)
  const list = numberString.split('.')
  return Number(
    list
    .map((data) => {
      const segment = data.split('').reduce((s, c) => {
        let l = s.length - 1
        s[l] && s[l].length < 2 ? (s[l] += c) : s.push(c)
        return s
      }, [])
      return segment
        .map((x) => {
          // console.log(x);
          return x - 22
        })
        .join('')
    })
    .join('.')
  )
}

export const saveLocal = async (name, payload, ignore = []) => {
  return new Promise((resolve, reject) => {
    try {
      if (Array.isArray(payload)) {
        const hasil = payload.map((x) => doEncrypt(x, ignore))
        localStorage.setItem(name, JSON.stringify(hasil))
        resolve('Berhasil')
      } else if (typeof payload === 'string') {
        localStorage.setItem(name, encryptascii(payload))
        resolve('Berhasil')
      } else {
        localStorage.setItem(name, JSON.stringify(doEncrypt(payload, ignore)))
        resolve('Berhasil')
      }
    } catch (err) {
      reject(err)
    }
  })
}

export const getLocal = (name, ignore = []) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localStorage.getItem(name)

      if (result === null) {
        resolve([])
      } else {
        if (result.includes('[')) {
          const hasil = JSON.parse(result).map((x) => doDecrypt(x, ignore))
          // console.log('INI DI ARRAY', hasil)
          resolve(hasil)
        } else if (result.includes('{')) {
          const hasil = doDecrypt(JSON.parse(result), ignore)
          // console.log('INI DI OBJECT', hasil)
          resolve(hasil)
        } else {
          resolve(doDecrypt(result, ignore))
        }
      }
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}